// imports
import { send } from 'emailjs-com';
import { getSID, getTID } from './cryptoK'

const SERVICE_ID = getSID();
const TEMPLATE_ID = getTID();

// Error messages
const ERROR_MESSAGES = {
    missingField: 'Please fill in all required fields',
    invalidEmail: 'Email is invalid',
    serverError: 'Failed to send email. Please try again.',
    timeout: 'The request took too long. Please try again.'
};

//DOM References
const form = document.getElementById('contact-form');
const loadingIndicator = document.getElementById('loading');
const successIndicator = document.getElementById('success');
const errorIndicator = document.getElementById('error');

// Event listener
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    try {
        // Show loading state
        showState('loading');

        // Get form data
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Validate inputs
        if (!name || !email || !message) {
            throw new Error(ERROR_MESSAGES.missingField);
        }
        if (!isValidEmail(email)) {
            throw new Error(ERROR_MESSAGES.invalidEmail);
        }

        // Prepare email data
        const emailData = {
            from_name: name,
            from_email: email,
            to_email: "wambuamwikya2001@gmail.com",
            to_name: 'Wambua',
            reply_to: email,
            message: message,
            subject: 'New Contact Form Submission'
        };

        // Send email
        const response = await send(SERVICE_ID, TEMPLATE_ID, emailData, {
            timeout: 10000 // 10 seconds timeout
        });

        // Handle success
        if (response.status === 200) {
            form.reset();
                      showState('success');
            setTimeout(() => hideSuccessState(), 5000);
        } else {
            throw new Error('Email service responded with an error');
        }

    } catch (error) {
        // Handle errors
        console.error('Email sending failed:', error);
        showState('error', error.message || ERROR_MESSAGES.serverError);
        setTimeout(() => hideErrorState(), 5000);
    }
});

// Validation functions
function isValidEmail(email) {
    return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
}

// State management functions
function showState(state, message = null) {
    const states = ['loading', 'success', 'error'];
    if (!states.includes(state)) return;

    // Hide all states
    states.forEach(s => document.getElementById(s).style.display = 'none');

    // Show requested state
    if (state === 'success') {
        successIndicator.textContent = 'Email sent successfully!';
        successIndicator.style.display = 'block';
    } else if (state === 'error') {
        errorIndicator.textContent = message || 'Failed to send email. Please try again.';
        errorIndicator.style.display = 'block';
    } else if (state === 'loading') {
        loadingIndicator.style.display = 'block';
    }
}

function hideSuccessState() {
    successIndicator.style.display = 'none';
}

function hideErrorState() {
    errorIndicator.style.display = 'none';
}
