import { API_URL, getPosts, toSlug, getPostById } from "./utils.js";
const createPostForm = document.querySelector("#create-post");
createPostForm.addEventListener("submit", handleUpdatePost);
async function handleUpdatePost(event) {
  event.preventDefault();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id") * 1;
  const posts = await getPosts();
  const post = posts.find((post) => post.id === id);
  if (!post) return;
  const title = this.title.value;
  const slug = toSlug(title);
  const image = this.image.value;
  const description = this.description.value;
  try {
    await axios.patch(`${API_URL}/posts/${id}`, {
      title: title || post.title,
      slug: slug || post.slug,
      image: image || post.image,
      description: description || post.description,
    });
    Toastify({
      text: "Updated post successfully!",
      duration: 3000,
      stopOnFocus: true, // Prevents dismissing of toast on hover
    }).showToast();
  } catch (error) {
    console.log(error);
  }
}
async function displayPost() {
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id") * 1;
  const post = await getPostById(id);
  if (!post) return;
  const { title, image, description, slug } = post;
  createPostForm.title.value = title;
  createPostForm.slug.value = slug;
  createPostForm.image.value = image;
  createPostForm.description.value = description;
}
window.addEventListener("load", displayPost);
