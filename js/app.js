const themeToggler = document.getElementById("mode-toggler");
themeToggler.addEventListener("click", () => {
  const modeImg = document.getElementById("mode-btn__img");
  if (document.body.classList.contains("light-mode")) {
    modeImg.src = "./images/moon.svg";
  } else {
    modeImg.src = "./images/Sun.svg";
  }
  document.body.classList.toggle("light-mode");
});
