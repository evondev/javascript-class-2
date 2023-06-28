// endpoit: https://hn.algolia.com/api/v1/search?query=react
// fetch
// promise chaining
const newsList = document.querySelector(".news-list");
const loading = document.createElement("div");
loading.classList.add("loading");

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function fetchHackerNews(query = "react") {
  newsList.innerHTML = "";
  newsList.appendChild(loading);
  try {
    const response = await fetch(
      `https://hn.algolia.com/api/v1/search?query=${query}`
    );
    await delay(5000);
    const value = await response.json();
    return value?.hits;
  } catch (error) {
    console.log(error);
    return [];
  } finally {
    loading.remove();
  }
}
function renderNewsItem(title) {
  const template = `<div class="news-item">${title}</div>`;
  newsList.insertAdjacentHTML("afterbegin", template);
}
fetchHackerNews().then((hits) => {
  init(hits);
});
function init(hits) {
  if (!Array.isArray(hits)) return;
  hits.forEach((hit) => {
    renderNewsItem(hit.title);
  });
}
const newsForm = document.querySelector(".news-form");
newsForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const query = this.query.value;
  fetchHackerNews(query).then((hits) => {
    init(hits);
  });
});
