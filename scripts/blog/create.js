import { API_URL, getPosts, toSlug } from "./utils.js";
const createPostForm = document.querySelector("#create-post");
async function handleAddNewPost(e) {
  e.preventDefault();
  const title = this.title.value;
  const slug = toSlug(title);
  const image = this.image.value;
  const description = this.description.value;
  if (!title || !slug || !image || !description) return;
  const posts = await getPosts();
  const newPost = {
    id: posts.length + 1,
    title,
    slug,
    image,
    description,
  };
  try {
    await axios.post(`${API_URL}/posts`, newPost);
    Toastify({
      text: "Add new post successfully!",
      duration: 3000,
      stopOnFocus: true, // Prevents dismissing of toast on hover
    }).showToast();
  } catch (error) {
    Toastify({
      text: "Add new post failed!",
      duration: 3000,
      stopOnFocus: true, // Prevents dismissing of toast on hover
    }).showToast();
  }
  this.reset();
}
createPostForm.addEventListener("submit", handleAddNewPost);
