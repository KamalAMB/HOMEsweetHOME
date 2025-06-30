document.addEventListener("DOMContentLoaded", () => {
  const collapses = document.querySelectorAll(".collapse");

  collapses.forEach(collapse => {
    const header = collapse.querySelector(".collapse-header");

    header.addEventListener("click", () => {
      // Fermer les autres
      collapses.forEach(c => {
        if (c !== collapse) {
          c.classList.remove("open");
        }
      });

      // Toggle celui-ci
      collapse.classList.toggle("open");
    });
  });
});
