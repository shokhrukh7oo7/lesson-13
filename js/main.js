let modeBtn = document.getElementById("dark-light");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "dark") {
    this.firstElementChild.src = "light.svg";
  } else {
    this.firstElementChild.src = "dark.svg";
  }
  document.body.classList.toggle("dark");
});