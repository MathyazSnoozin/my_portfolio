const elements = document.querySelectorAll(
  ".introduction, .aboutme, .goals, footer"
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

elements.forEach(el => observer.observe(el));

const toggle = document.createElement("button");
toggle.innerText = "🌙";
toggle.style.position = "fixed";
toggle.style.bottom = "20px";
toggle.style.right = "20px";
toggle.style.padding = "10px";
toggle.style.borderRadius = "50%";
toggle.style.backgroundColor="rgb(163, 55, 55)"
toggle.style.border = "none";
toggle.style.cursor = "pointer";

document.body.appendChild(toggle);

toggle.onclick = () => {
  document.body.classList.toggle("dark-mode");
  toggle.innerText="☀️"
  toggle.style.backgroundColor="white"
};


// CREATE PROJECT SECTION
const projectSection = document.createElement("div");
projectSection.className = "projects";
projectSection.style.borderRadius="20px"
projectSection.style.marginTop="100px"
projectSection.style.padding="40px";

projectSection.innerHTML = `
  <h1>My Projects</h1>
  <div class="project-grid"></div>
`;

document.body.insertBefore(projectSection, document.querySelector("footer"));

// PROJECT DATA
const projects = [
  {
    title: "Jewelry E-shop SkyDol",
    img: "photos/SkyDol.png",
    desc: "online jewelry store"
  },
  {
    title: "Portfolio",
    img: "photos/portfolio.png",
    desc: "Personal website"
  },
  {
    title: "C Compiler",
    img: "photos/compilateurC.png",
    desc: "C Language compiler in Java"
  }
];

// RENDER PROJECTS
const grid = document.querySelector(".project-grid");

projects.forEach(p => {
  grid.innerHTML += `
    <div class="card">
      <img src="${p.img}">
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
    </div>
  `;
});