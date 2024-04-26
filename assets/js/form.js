const formEl = document.querySelector("form");

const changePage = function () {
  window.location.href = "./blog.html";
}

const dataToLocalStorage = function(data) {
  console.log("1");
  const blogData = dataToLocalStorage();

  blogData.push(data);
  const stringFromData = JSON.stringify(blogData);
  console.log(blogData);

  localStorage.setItem("blogs", stringFromData)
  console.log("3");
}

const handleFormSubmit = function(event) {
  event.preventDefault();

  const usernameEl = document.querySelector("#messageUsername").value.trim();
  const titleEl = document.querySelector("#messageTitle").value.trim();
  const contentEl = document.querySelector("#messageContent").value.trim();

  if (!usernameEl || !titleEl || !contentEl) {
    return window.alert("Please complete the form!")
  }

  const formData = {
    username: usernameEl,
    title: titleEl,
    content: contentEl,
  };

  dataToLocalStorage(formData);
  changePage();
};

formEl.addEventListener("submit", handleFormSubmit);
