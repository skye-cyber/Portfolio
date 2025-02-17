  document.addEventListener("DOMContentLoaded", function() {
    const projectGrid = document.getElementById("project-grid");
    const projectCardTemplate = document.getElementById("project-card-template").content;
    const modal = document.getElementById("modal");
    const closeModal = document.getElementById("close-modal");

    // Placeholder fetch function
    async function fetchProjects() {
      // Simulate fetching data from server (you’ll replace this with actual fetch code)
      const projects = [
        {
          title: "Project Alpha",
          description: "A short description for Project Alpha.",
          technologies: ["JavaScript", "TailwindCSS"],
          demoLink: "#",
          githubLink: "#",
        },
        // Add more project objects as needed
      ];

      return projects;
    }

    async function loadProjects() {
      const projects = await fetchProjects();

      projects.forEach((project) => {
        const card = projectCardTemplate.cloneNode(true);
        card.querySelector("h3").textContent = project.title;
        card.querySelector("p").textContent = project.description;

        const tagsContainer = card.querySelector(".flex.flex-wrap");
        project.technologies.forEach((tech) => {
          const techTag = document.createElement("span");
          techTag.className = "text-sm px-2 py-1 bg-indigo-500 text-white rounded-lg";
          techTag.textContent = tech;
          tagsContainer.appendChild(techTag);
        });

        // Open modal with detailed info on click
        card.querySelector(".project-card").addEventListener("click", () => showProjectModal(project));

        projectGrid.appendChild(card);
      });
    }

    function showProjectModal(project) {
      document.getElementById("modal-title").textContent = project.title;
      document.getElementById("modal-description").textContent = project.description;
      document.getElementById("modal-demo-link").href = project.demoLink;
      document.getElementById("modal-github-link").href = project.githubLink;

      const modalTechnologies = document.getElementById("modal-technologies");
      modalTechnologies.innerHTML = "";
      project.technologies.forEach((tech) => {
        const techTag = document.createElement("span");
        techTag.className = "text-sm px-2 py-1 bg-indigo-500 text-white rounded-lg";
        techTag.textContent = tech;
        modalTechnologies.appendChild(techTag);
      });

      modal.classList.remove("hidden");
    }

    closeModal.addEventListener("click", () => modal.classList.add("hidden"));

    // Initial load
    loadProjects();

    // Infinite scroll (for demonstration, you may replace with Intersection Observer)
    window.addEventListener("scroll", () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        loadProjects(); // Load more projects
      }
    });
  });
