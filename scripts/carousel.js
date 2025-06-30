document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".carousel-container");
  if (!container) return; // pas de carousel sur cette page

  const img = document.getElementById("carouselImage");
  const prev = document.getElementById("prevBtn");
  const next = document.getElementById("nextBtn");

  const images = container.dataset.images.split(",");
  let current = 0;

  function updateImage() {
    img.style.opacity = 0;
    setTimeout(() => {
      img.src = images[current];
      img.style.opacity = 1;
    }, 200);
  }

  prev.addEventListener("click", () => {
    current = (current - 1 + images.length) % images.length;
    updateImage();
  });

  next.addEventListener("click", () => {
    current = (current + 1) % images.length;
    updateImage();
  });

  if (images.length <= 1) {
    prev.style.display = "none";
    next.style.display = "none";
  }
});
