window.addEventListener("load", function () {
  this.setTimeout(() => {
    const loading = document.querySelector(".loading");
    if (loading) {
      loading.classList.add("loading--hidden");
    }
  }, 1000);
});
window.addEventListener("beforeunload", function (e) {
  e.returnValue = ""; // Chrome requires returnValue to be set
  return "?";
});
