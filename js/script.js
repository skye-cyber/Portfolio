import { marked } from "marked";

document.addEventListener('DOMContentLoaded', () => {
    const skills = document.getElementById('skills_sec');
    const trohpy_sec = document.getElementById('git_troph');

    const gitTrophies = [
        '![](https://github-profile-trophy.vercel.app/?username=skye-cyber&theme=radical&no-frame=false&no-bg=true&margin-w=4)'];

    const topRepos = [
        '![](https://github-contributor-stats.vercel.app/api?username=skye-cyber&limit=5&theme=tokyonight&combine_all_yearly_contributions=true)'];

    const stackArray = [
        '![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)',
        '![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)',
        '![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)',
        '![scikit-learn](https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white)',
        '![Gimp](https://img.shields.io/badge/Gimp-657D8B?style=for-the-badge&logo=gimp&logoColor=FFFFFF)',
        '![MariaDB](https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white)',
        '![Apache](https://img.shields.io/badge/apache-%23D42029.svg?style=for-the-badge&logo=apache&logoColor=white)',
        '![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)',
        '![Django](https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white)',
        '![OpenCV](https://img.shields.io/badge/opencv-%23white.svg?style=for-the-badge&logo=opencv&logoColor=white)',
        '![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)',
        '![Qt](https://img.shields.io/badge/Qt-%23217346.svg?style=for-the-badge&logo=Qt&logoColor=white)',
        '![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)',
        '![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)',
        '![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)',
        '![Kotlin](https://img.shields.io/badge/kotlin-%237F52FF.svg?style=for-the-badge&logo=kotlin&logoColor=white)',
        '![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white)'
    ];

    function parseStringToImageElement(str) {
        // Create an instance of DOMParser
        const parser = new DOMParser();

        // Parse the string as a HTML document and ensure it contains the <img> tag
        const doc = parser.parseFromString(str, 'text/html');
        const imageElement = doc.querySelector('img');

        // Check if the <img> element exists
        if (imageElement) {
            return imageElement;
        } else {
            // If no <img> tag was found, return null or handle it as needed
            console.error('No <img> tag found in the provided string');
            return null;
        }
    }

    // Loop through each badge URL, create an anchor element with an image, and append it to the skills container
    stackArray.forEach((badgeUrl) => {
        // Create a new anchor element
        const link = document.createElement('a');
        const imagestr = marked(badgeUrl);

        const img = parseStringToImageElement(imagestr);

        link.href = img.src; // Set the href attribute to the badge URL
        link.target = '_blank'; // Ensure the link opens in a new tab
        link.rel = 'noopener noreferrer'; // Security measure

        // Create an image element and set its source to the badge URL
        // Append the image to the anchor element
        link.appendChild(img);

        // Append the anchor element to the skills container
        skills.appendChild(link);
    });

    gitTrophies.forEach((item) => {
        const gitTrophHTML = marked.parseInline(item);
        const trophyDiv = document.createElement('div');
        trophyDiv.classList.add('trophies', 'p-2', 'w-full');
        trophyDiv.innerHTML = gitTrophHTML;
        trohpy_sec.appendChild(trophyDiv);
    });
});
