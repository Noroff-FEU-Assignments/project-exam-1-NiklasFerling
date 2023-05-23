var restAPI = "https://lightweight.ferling.no/wp-json/wp/v2/posts?per_page=100";

const slidesContainer = document.getElementById("slides-container");
var container = document.querySelector(`.slides-container`);

const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

async function getBlogs(url) {
  const response = await fetch(url);
  const posts = await response.json();

  posts.forEach(function (posts) {
    container.innerHTML += `
      <a href="post.html?id=${posts.id}" class="slide">
        <div class="img"><img src="${posts.better_featured_image.source_url}" alt="${posts.better_featured_image.alt_text}"></div>
        <p>${posts.title.rendered}</p>
      </a>`;
  });
}

getBlogs(restAPI);

nextButton.addEventListener("click", function () {
  container.scrollLeft += 340;
});

prevButton.addEventListener("click", function () {
  container.scrollLeft -= 340;
});
