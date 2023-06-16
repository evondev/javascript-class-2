// scroll progress
const scrollProgress = document.querySelector(".scroll-progress");
window.addEventListener("scroll", function () {
  const scrollY = window.scrollY;
  const bodyHeight = document.body.scrollHeight;
  const windowHeight = window.innerHeight;
  const width = (scrollY / (bodyHeight - windowHeight)) * 100;
  scrollProgress.style.width = width + "%";
});
// tab scroll into view center
const tabList = document.querySelector(".tab-list");
const tabItems = document.querySelectorAll(".tab-item");
tabItems.forEach((tabItem) => {
  tabItem.addEventListener("click", function (e) {
    // scroll in to view center
    console.log("scroll in to view center");
    e.target.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  });
});
