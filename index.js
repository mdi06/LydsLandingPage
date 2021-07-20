//let toggleBtn = document.querySelector(".check");
//
//toggleBtn.addEventListener("click", function () {
//  myFunction();
//});
//
//function myFunction() {
//  let el = document.body;
//  el.classList.toggle("dark-mode");
//}

let toggle = document.querySelector(".check");
let storedTheme =
  localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");
if (storedTheme)
  document.documentElement.setAttribute("data-theme", storedTheme);
toggle.onclick = function () {
  var currentTheme = document.documentElement.getAttribute("data-theme");
  var targetTheme = "light";

  if (currentTheme === "light") {
    targetTheme = "dark";
  }

  document.documentElement.setAttribute("data-theme", targetTheme);
  localStorage.setItem("theme", targetTheme);
};
