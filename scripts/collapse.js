const toggles = document.querySelectorAll(".toggle");

toggles.forEach((btn) => {
  btn.addEventListener("click", () => {
    const currentContent = btn.nextElementSibling;

    document.querySelectorAll(".content").forEach((el) => {
      if (el !== currentContent) {
        el.style.display = "none";
      }
    });

    currentContent.style.display =
      currentContent.style.display === "block" ? "none" : "block";
  });
});

// Tout est fermé par défaut
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".content").forEach((el) => {
    el.style.display = "none";
  });
});
