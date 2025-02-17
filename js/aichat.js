import { HfInference } from "@huggingface/inference";
import { marked } from "marked";
import hljs from 'highlight.js';
import { getKey } from './cryptoK.js';
const hf = getKey()
//import DOMPurify from 'dompurify';

const client = new HfInference(hf);
const chatArea = document.getElementById("chatArea");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

//Set custom intruction for the model
let customInstructions = `
Your name is skye.
You are deployed on a personal portfolio for Wambua aka Skye.
Wambua is an undergranduate software developer at Kirinyaga University in Kenya,
he has mastered many digital technologies including but not limited to: html5, css3, javascript, tailwindcss, nodejs,
python, django, git, mysql/mariadb, markdown, GIMP(GNU image manipulation program), scikit-learn, opencv.
You can find him on **[GitHub Profile](https://github.com/skye-cyber)** or **[Huggingface] (https://huggingface.co/skye-waves)**.
Your goal is to help the user in all the questions that they ask.
You are to be brief and direct to the point based on user needs.
You are required to use tailwindcss for styling unless the user requests otherwise.
Begin by introducing yourself and sighting your deployer and your purpose at if you have not done so in the conversation history.
If the user needs to visualize diagrams or generate images, you are to inform them that you cannot directly generate diagrams or images but can provide assisatnce, at this instance you will come up with a query describing what you or the user would wish to visualize then inform them to paste that prompt in the text area stating with '/image' to generate image. If it is not clear what image user want to generate ask them for description of what they want then, restructure the it to form a clear prompt for the user. If the user is not satified with this image generation method, for diagrams you can offer to provide them with dot code and instruction on how to use it, you can also inform them to activate the checkbox with the text ' Use Flux 4 Image generation' appearing at the top of the chat area, which will use a different approach to generate the image or diagram.
`

// Initialize conversation history
let conversationHistory = [];

//Push custom instructions
conversationHistory.push({ role: "system", content: customInstructions });
// Initialize highlight.js
hljs.configure({ ignoreUnescapedHTML: true });

// Custom renderer for syntax highlighting
const renderer = new marked.Renderer();

// Custom renderer for code blocks
renderer.code = function(code, language) {
    // If language is not provided, try to extract it from the raw block
    if (!language) {
        language = code['lang']
    }

    const text = code['text']

    // Use highlight.js to apply syntax highlighting
    const validLanguage = language && hljs.getLanguage(language) ? language : 'plaintext';

    // Highlight the code using the correct API
    const highlighted = hljs.highlight(text, { language: validLanguage }).value;

    // Create a unique ID for the copy button
    const copyButtonId = `copy-button-${Math.random().toString(36).substring(2, 9)}`;

    // Return HTML with highlighted code and a copy button
    return `
    <div class="relative my-auto p-2 border border-gray-300 bg-white rounded-md">
    <button id="${copyButtonId}" class="copy-button absolute rounded-md px-2 py-2 right-2 top-2 bg-gradient-to-r from-sky-800 to-purple-600 hover:bg-blue-400 text-white border border-2 cursor-pointer opacity-80 hover:opacity-50">
    Copy
    </button>
    <pre class="rounded-md"><code class="hljs ${validLanguage}">${highlighted}</code></pre>
    </div>
    `;
};

// Set the renderer in marked options
marked.setOptions({
    renderer: renderer,
    highlight: function(code, lang) {
        const language = hljs.getLanguage(lang) ? lang : 'plaintext';
        return hljs.highlight(code, { language }).value;
    },
    breaks: true // Enables line breaks for Markdown
});

// Add event listeners to dynamically created copy buttons
function addCopyListeners() {
    document.querySelectorAll('.copy-button').forEach(button => {
        button.addEventListener('click', async function() {
            const codeBlock = this.nextElementSibling.querySelector('code');
            const textToCopy = codeBlock.innerText;

            try {
                await navigator.clipboard.writeText(textToCopy);
                this.textContent = 'Copied!';
                setTimeout(() => {
                    this.textContent = 'Copy';
                }, 3000);
            } catch (err) {
                console.error('Failed to copy: ', err);
            }
        });
    });
}

// Function to generate an image
async function generateImage(data, loadingMessage) {
    const response = await fetch(
        "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-3.5-large",
        {
            headers: {
                Authorization: `Bearer ${hf}`,
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    const result = await response.blob();
    //loadingMessage.remove(); // Remove loading message once image is ready
    return URL.createObjectURL(result); // Return blob URL for the generated image
}

// Function to generate an image
async function generateImageFlux(data, loadingMessage) {
    const response = await fetch(
        "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev",
        {
            headers: {
                Authorization: `Bearer ${hf}`,
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    const result = await response.blob();
    //loadingMessage.remove(); // Remove loading message once image is ready
    return URL.createObjectURL(result); // Return blob URL for the generated image
}

//implement copy for the user messags
function implementUserCopy() {
    document.querySelectorAll('.user-copy-button').forEach(button => {
        const buttonParent = button.parentElement;
        // Find the <p> element within the parent
        const TextBlock = buttonParent.querySelector('p');

        // Hide the copy button if the user text is less than 50 characters
        if (TextBlock && TextBlock.innerHTML.length < 50) {
            button.style.display = 'none';
        }

        button.addEventListener('click', async function() {
            // Select the parent of the button (excluding the button itself)

            const textToCopy = TextBlock.innerText;

            if (textToCopy.length >= 50){
                try {
                    await navigator.clipboard.writeText(textToCopy);
                    this.textContent = 'Copied!';
                    setTimeout(() => {
                        this.textContent = 'Copy';
                    }, 3000);
                } catch (err) {
                    console.error('Failed to copy: ', err);
            }
        }
        });
    });
}

// escape html so that it is displayed as plaintext
function escapeHTML(unsafe) {
    return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Function to classify text or generate image based on user input
async function classifyText(text) {
    const isImageRequest = text.startsWith("/image");

    const escapedText = escapeHTML(text);

    // Display user message
    const userMessage = document.createElement("div");
    userMessage.classList.add("flex", "justify-end", "mb-4");

    //unique id for userMessage this will help append response directly below the corresponding request
    const userMSGId = `msg_${Math.random().toString(34).substring(3, 9)}`;

    const copyButtonId = `copy-button-${Math.random().toString(36).substring(5, 9)}`;
    userMessage.innerHTML = `
    <div data-id="${userMSGId}" class="relative bg-gradient-to-tl from-sky-600 to-fuchsia-800 text-white p-3 rounded-lg max-w-3xl shadow-lg">
        <p class="pre-line break-words">${escapedText}</p>
        <button id="${copyButtonId}" class="user-copy-button absolute rounded-md px-2 py-2 right-1 bottom-1 bg-gradient-to-r from-indigo-400 to-pink-400 hover:bg-indigo-200 text-white border border-2 cursor-pointer opacity-80 hover:opacity-50">
        Copy
        </button>
    </div>`;

    chatArea.appendChild(userMessage);
    chatArea.scrollTop = chatArea.scrollHeight;
    implementUserCopy();  //enable copy
    // Only add to conversation history if it's a text request
    if (!isImageRequest) {
        conversationHistory.push({ role: "user", content: text });
    }

    if (isImageRequest) {
        const imageData = { inputs: text.replace("/image", "").trim() };

        // Create a unique ID for the timer display to avoid overlaping timers incase of multiple requests
        const tId = `timer_${Math.random().toString(32).substring(2, 7)}`;
        //image container unique id
        const imageId = `image_${Math.random().toString(36).substring(2, 7)}`;

        // Display loading message with timer
        const loadingMessage = document.createElement("div");
        loadingMessage.classList.add("flex", "justify-start", "mb-4");
        loadingMessage.innerHTML = `<div id="${imageId}" class="bg-gray-200 text-gray-800 p-3 rounded-lg max-w-xs shadow-lg">Generating image... <span id="${tId}" class="text-sm text-gray-600">(0s)</span></div>`;

        //append loading message to the chatArea
        chatArea.appendChild(loadingMessage);
        chatArea.scrollTop = chatArea.scrollHeight;

        // Start timer
        let secondsElapsed = 0;
        const timerInterval = setInterval(() => {
            secondsElapsed++;
            document.getElementById(tId).textContent = `(${secondsElapsed}s)`;
        }, 1000);
        //console.log(document.getElementById(tId));
        const ModelCheckbox = document.getElementById('CModel');
        let imageUrl
        if (ModelCheckbox.checked) {
            imageUrl = await generateImageFlux(imageData, loadingMessage);
        } else {
            imageUrl = await generateImage(imageData, loadingMessage);
        }


        clearInterval(timerInterval); // Stop timer once image is ready

        // Create image element with save option
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("flex", "justify-start", "mb-4", "flex-col");

        const imageElement = document.createElement("img");
        imageElement.src = imageUrl;
        imageElement.classList.add("rounded-lg", "shadow-lg", "mt-4", "max-w-xs", "cursor-pointer");

        // Event listener to enable fullscreen on click
        imageElement.addEventListener("click", () => {
            if (imageElement.requestFullscreen) {
                imageElement.requestFullscreen(); // Standard method
            } else if (imageElement.webkitRequestFullscreen) { // Safari
                imageElement.webkitRequestFullscreen();
            } else if (imageElement.msRequestFullscreen) { // IE/Edge
                imageElement.msRequestFullscreen();
            }
        });

        // Create button element to contain the download link
        const downloadButtonContainer = document.createElement("button");
        downloadButtonContainer.classList.add("text-white","rounded-b-md", "bg-gradient-to-r", "from-blue-500", "to-purple-500", "hover:from-blue-600", "hover:to-purple-600", "font-semibold", "py-2", "px-4", "inline-block", "focus:outline-none", "shadow-md", "w-fit", "h-fit", "mt-0", "ml-2"
        );

        // Create anchor (link) element for download inside button
        const downloadButton = document.createElement("a");
        downloadButton.href = imageUrl;
        downloadButton.download = "generated_image.png"; // Default filename
        downloadButton.classList.add("text-white", "no-underline");
        downloadButton.innerText = "Download Image";

        // Append anchor to button container
        downloadButtonContainer.appendChild(downloadButton);

        // Append image and download button to container
        imageContainer.appendChild(imageElement);
        imageContainer.appendChild(downloadButtonContainer);

        const targetTemplate = document.getElementById(imageId);

        targetTemplate.innerText = '';
        // Remove all classes
        targetTemplate.className = '';
        targetTemplate.appendChild(imageContainer); // Append the entire container instead of using innerHTML

        chatArea.scrollTop = chatArea.scrollHeight;
    } else {
        const mode = document.getElementById('mode')
        const aiMessage = document.createElement("div");
        aiMessage.classList.add("flex", "justify-start", "mb-4");
        aiMessage.innerHTML = `<div class="bg-gray-200 text-gray-800 p-3 rounded-lg max-w-2xl shadow-xl">Thinking...</div>`;
        chatArea.appendChild(aiMessage);
        chatArea.scrollTop = chatArea.scrollHeight;
        if (mode === 'coding mode') {
            var model = "Qwen/Qwen2.5-Coder-32B-Instruct"
        }
        else{
            var model = "Qwen/Qwen2.5-72B-Instruct"
        }

        try {
            const stream = client.chatCompletionStream({
                model: model,
                messages: conversationHistory,
                max_tokens: 3_000
            });

            let output = "";
            for await (const chunk of stream) {
                if (chunk.choices && chunk.choices.length > 0) {
                    output += chunk.choices[0].delta.content;
                    aiMessage.innerHTML = `<div class="bg-gray-200 text-gray-800 p-3 rounded-lg max-w-3xl overflow-x-auto pre-line break-words shadow-lg border border-gray-300">${marked(output)}</div>`;
                }
                addCopyListeners(); // Add event listeners after rendering content
            }

            conversationHistory.push({ role: "assistant", content: output });
        } catch (error) {
            aiMessage.innerHTML = `<div class="bg-red-200 text-red-800 p-3 rounded-lg max-w-xs shadow-lg">Error: ${error.message}</div>`;
            conversationHistory.pop({ role: "user", content: text });
        }
    }
}

// Send message on button click or Enter key
sendBtn.addEventListener("click", async function() {
    const inputText = userInput.value.trim();
    if (inputText) {
        userInput.value = ""; // Clear input field
        await classifyText(inputText);
    }
});

userInput.addEventListener("keydown", async function(e) {
    if (e.key === "Enter" && !e.shiftKey) {
        const inputText = userInput.value.trim();
        if (inputText) {
            userInput.value = ""; // Clear input field
            await classifyText(inputText);
        }
    }
});
