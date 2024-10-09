const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    const navBarHeight = document.querySelector(".nav-content").offsetHeight;
    const elementPosition = targetElement.offsetTop - (navBarHeight + 30);
    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });
  });
});

function loadComponent(filePath, elementId) {
  fetch(filePath)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch((error) => console.error("Erro ao carregar o componente:", error));
}

loadComponent(
  "./src/modules/portifolio/components/home/index.html",
  "home-section"
);

loadComponent(
  "./src/modules/portifolio/components/resume-experience/index.html",
  "resume-experience"
);

loadComponent(
  "./src/modules/portifolio/components/about/index.html",
  "about-section"
);

loadComponent(
  "./src/modules/portifolio/components/project/index.html",
  "project-section"
);

loadComponent(
  "./src/modules/portifolio/components/certification/index.html",
  "certification-section"
);

loadComponent(
  "./src/modules/portifolio/components/contact/index.html",
  "contact-section"
);

loadComponent(
  "./src/modules/portifolio/components/footer/index.html",
  "footer-section"
);
