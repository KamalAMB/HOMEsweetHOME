document.addEventListener("DOMContentLoaded", () => {
  const images = [
    "assets/img/bien1.jpg",
    "assets/img/bien2.jpg",
    "assets/img/bien3.jpg"
  ];

  let current = 0;

  const img = document.getElementById("carouselImage");
  const prev = document.getElementById("prevBtn");
  const next = document.getElementById("nextBtn");

  function updateCarousel() {
    img.style.opacity = 0;

    setTimeout(() => {
      img.src = images[current];
      img.style.opacity = 1;
    }, 200);
  }

  if (images.length <= 1) {
    prev.style.display = "none";
    next.style.display = "none";
  }

  prev.addEventListener("click", () => {
    current = (current - 1 + images.length) % images.length;
    updateCarousel();
  });

  next.addEventListener("click", () => {
    current = (current + 1) % images.length;
    updateCarousel();
  });

  updateCarousel();
});
