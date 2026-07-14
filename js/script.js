// FK Construct — interactions du site

document.addEventListener("DOMContentLoaded", () => {
  initNavToggle();
  initGalleryFilters();
  initContactForm();
  setActiveNavLink();
});

// Menu mobile
function initNavToggle() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  if (!header || !toggle) return;

  toggle.addEventListener("click", () => {
    header.classList.toggle("nav-open");
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => header.classList.remove("nav-open"));
  });
}

// Filtres de la galerie (page réalisations)
function initGalleryFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  const items = document.querySelectorAll(".gallery-item");
  if (!buttons.length || !items.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.dataset.filter;
      items.forEach((item) => {
        const match = category === "tout" || item.dataset.category === category;
        item.style.display = match ? "" : "none";
      });
    });
  });
}

// Validation simple du formulaire de contact
function initContactForm() {
  const form = document.querySelector("#contact-form");
  const feedback = document.querySelector("#form-feedback");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector("#name");
    const email = form.querySelector("#email");
    const message = form.querySelector("#message");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      showFeedback(feedback, "error", "Merci de remplir tous les champs obligatoires.");
      return;
    }

    if (!emailPattern.test(email.value.trim())) {
      showFeedback(feedback, "error", "Merci de saisir une adresse email valide.");
      return;
    }

    // NOTE : envoi non connecté à un backend pour l'instant.
    // Brancher ici un service (Formspree, PHP mail(), API) avant mise en ligne.
    showFeedback(
      feedback,
      "success",
      "Merci, votre message a bien été préparé. La connexion à l'envoi réel reste à configurer."
    );
    form.reset();
  });
}

function showFeedback(el, type, text) {
  if (!el) return;
  el.textContent = text;
  el.className = "form-feedback " + type;
}

// Met en surbrillance le lien de navigation actif
function setActiveNavLink() {
  const current = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === current) {
      link.classList.add("active");
    }
  });
}
