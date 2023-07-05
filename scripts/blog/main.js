const postList = document.querySelector(".post-list");
const API_URL = "http://localhost:3000";
async function getPosts() {
  try {
    const response = await axios.get(`${API_URL}/posts`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
function displayPost(data) {
  const template = `<a href="${data.slug}" class="post-item">
  <div class="post-image">
    <img
      src="${data.image}"
      alt=""
    />
  </div>
  <div class="post-title">${data.title}</div>
</a>`;
  postList && postList.insertAdjacentHTML("afterbegin", template);
}
window.addEventListener("load", async function () {
  try {
    const posts = await getPosts();
    posts.forEach((post) => {
      displayPost(post);
    });
  } catch (error) {
    console.log("error:", error);
  }
});
