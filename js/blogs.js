var restAPI = "https://lightweight.ferling.no/wp-json/wp/v2/posts?per_page=10";
var pageNumber = 2;

const container = document.querySelector(".posts");
const viewMoreBTN = document.querySelector(".view");
const unavailable = document.querySelector(".unavailable");

async function getBlogs(url) {
  const response = await fetch(url);
  const posts = await response.json();
  console.log(posts);

  try {
    posts.forEach(function (posts) {
      container.innerHTML += `
          <a href="post.html?id=${posts.id}" class="card">
            <div class="img"><img src="${posts.better_featured_image.source_url}" alt="${posts.better_featured_image.alt_text}" /></div>
            <p>${posts.title.rendered}</p>
          </a>`;
    });
  } catch (error) {
    viewMoreBTN.style.display = "none";
    unavailable.style.display = "block";
  }
}

viewMoreBTN.onclick = function () {
  restAPI = `https://lightweight.ferling.no/wp-json/wp/v2/posts?per_page=10&page=${pageNumber}`;

  pageNumber += 1;

  getBlogs(restAPI);
};

getBlogs(restAPI);
