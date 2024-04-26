const themeChangerButton = document.querySelector(".toggle-button");

const dataFromLocalStorage = function () {
  const unreadyData = localStorage.getItem("blogs");
  const readyData = JSON.parse(unreadyData);
  return readyData || [];
};

const applytheme = function (theme) {
  let maincolor, textcolor;

  if (theme === "dark-theme") {
    maincolor = "#000000";
    textcolor = "#ffffff";
  } else {
    maincolor = "#ffffff";
    textcolor = "0000000";
  }

  document.documentElement.style.setProperty("--main-color", mainColor);
  document.documentElement.style.setProperty("--text-color", textcolor);
};

const handleThemeChange = function () {
  const theme = localStorage.getItem("theme") || "dark-theme";
  console.log(theme);

  let diffTheme;
  if (theme === "light-theme") {
    diffTheme = "dark-theme";
  } else {
    diffTheme = "light-theme";
  }
  console.log(diffTheme);

  localStorage.setItem("theme", diffTheme);
  applyTheme(diffTheme);
};

themeChangerButton.addEventListener("click", () => {
  handleThemeChange();
});
