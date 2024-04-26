const mainElement = document.querySelector("main");
const backButton = document.querySelector(".back-button");

const instantiateList = function () {
  const blogData = dataFromLocalStorage();

  if (blogData) {
    blogData.forEach((blog) => {
      const articleEl = document.createElement("article");
      articleEl.classList.add("card");

      const contentDiv = document.createElement("div");
      contentDiv.classList.add("card-content");

      const title = document.createElement("h2");
      title.textContent = blog.title;
      const byLine = document.createElement("p");
      byLine.classList.add("card-by");
      byLine.textContent = `by ${blog.username}`;

      const titleContainer = document.createElement("div");
      titleContainer.classList.add("card-title");
      titleContainer.appendChild(title);
      titleContainer.appendChild(byLine);
      contentDiv.appendChild(titleContainer);

      const content = document.createElement("p");
      content.textContent = blog.content;
      contentDiv.appendChild(content);

      articleEl.appendChild(contentDiv);
      mainElement.appendChild(articleEl);
    });
  }
};

document.addEventListener("DOMContentLoaded", instantiateList);

backButton.addEventListener("click", () => {
  window.location.href = "index.html";
});
