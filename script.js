window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".custom-nav");

  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.2)";
  } else {
    navbar.style.boxShadow = "none";
  }
});
