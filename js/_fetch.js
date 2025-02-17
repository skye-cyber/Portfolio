/******/ (() => { // webpackBootstrap
/*!*********************!*\
  !*** ./js/fetch.js ***!
  \*********************/
const projectsContainer = document.getElementById('projectsContainer');
//console.log(window.getComputedStyle(projectsContainer).display);
// Select the filter buttons
const filters = document.querySelectorAll('.filter-button');
let currentCategory = ''; // Current filter category
let projects = []; // This will store projects

// Fetch all projects from the backend
async function fetchProjects() {
  try {
    const url = `http://localhost:3001/api/projects${currentCategory ? `?category=${encodeURIComponent(currentCategory)}` : ''}`;
    console.log("Send request:awaiting Response for", currentCategory);
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Error fetching projects: ${response.statusText}`);
    const data = await response.json();

    //clear container first
    projectsContainer.innerHTML = '';
    data.forEach(project => {
      displayProjects(project);
      projects.push(project);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

// Open Modal with Project Details
function openModal(projectId) {
  // Find the project based on the ID
  //console.log(projects)
  const project = projects.find(p => p.id === parseInt(projectId, 10));
  if (!project) {
    console.error('Project not found for ID:', projectId);
    return;
  }
  const modal = document.getElementById('projectModal');
  // Populate modal with project details
  document.getElementById('modalTitle').innerText = project.title;
  document.getElementById('modalDescription').innerText = project.description;
  document.getElementById('modalTechnologies').innerText = `Technologies: ${project.technologies}`;
  document.getElementById('modalLiveDemo').href = project.live_demo_link;
  document.getElementById('modalGithubLink').href = project.github_link;

  // Show the modal
  modal.classList.remove('hidden');
  const closeModalBt = document.getElementById('closeModal');
  closeModalBt.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  //Allow modal closing by escaping ESC
  if (modal) {
    document.addEventListener("keydown", async function (e) {
      if (e.key === "Escape" && !e.shiftKey) {
        modal.classList.add('hidden');
      }
    });
  }
}

// Display projects in the DOM
function displayProjects(project) {
  // Create a div element for the project
  const projectDiv = document.createElement('div');
  projectDiv.className = 'project p-4 my-auto bg-white text-black rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105 duration-400" data-id="${project.id}';
  projectDiv.dataset.id = project.id;
  projectDiv.innerHTML = `
    <h2 class="text-xl font-bold">${project.title}</h2>
    <p class="text-gray-700 mt-2">${project.description}</p>
    <p class="text-sm text-gray-500 mt-2">Technologies: ${project.technologies}</p>
    <div class="mt-4 flex justify-between">
        <a href="${project.live_demo_link}" target="_blank" class="text-blue-600 hover:underline">Live Demo</a>
        <a href="${project.github_link}" target="_blank" class="text-gray-600 hover:underline">GitHub</a>
    </div>
    `;
  projectsContainer.appendChild(projectDiv); // Append each project to the container
}

// Ensure filters is not null or undefined
if (filters) {
  // Handle filter clicks
  filters.forEach(button => {
    button.addEventListener('click', event => {
      event.stopPropagation(); // Prevent the event from bubbling up
      //if (event.target.tagName === 'BUTTON') {
      currentCategory = event.target.innerText === 'All' ? '' : event.target.innerText;
      fetchProjects();
      //}
    });
  });
} else {
  console.error('No filter buttons found');
}

// Event delegation for opening the modal
projectsContainer.addEventListener('click', event => {
  const projectElement = event.target.closest('.project');
  if (projectElement) {
    const projectId = projectElement.dataset.id;
    if (projectId) {
      openModal(projectId);
    }
  }
});

// Initial fetch on page load
window.onload = fetchProjects;
/******/ })()
;
//# sourceMappingURL=_fetch.js.map