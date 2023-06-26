const obser = new IntersectionObserver(
  (observer) => {
    observer.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.25,
  }
);
const images = document.querySelectorAll(".content img");
images.forEach((image) => {
  obser.observe(image);
});
