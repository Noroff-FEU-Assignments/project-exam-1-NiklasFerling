const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const content = document.querySelector(".content");
const h1 = document.querySelector("h1");

const restAPI = "https://lightweight.ferling.no/wp-json/wp/v2/posts/" + id;

async function getPost(url) {
  const response = await fetch(url);
  const post = await response.json();
  console.log(post.title);

  content.innerHTML += `<div class="img""><img src="${post.better_featured_image.source_url}" alt="${post.better_featured_image.alt_text}" /></div>`;
  content.innerHTML += post.content.rendered;
  h1.innerHTML = post.title.rendered;
}
getPost(restAPI);
