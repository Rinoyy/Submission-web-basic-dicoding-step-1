let buttonToggle = document.getElementById("toggle");
let modalToggle = document.querySelector(".modal");
let nav = document.querySelector("nav");
let header = document.querySelector("header");

// Toggle modal saat tombol diklik
buttonToggle.addEventListener("click", function () {
  modalToggle.classList.toggle("open");
  console.log("Kode berjalan");
});

// Sembunyikan modal saat scroll
document.addEventListener("scroll", function () {
  modalToggle.classList.remove("open");
});



window.addEventListener("scroll", function () {
  let scrollY = window.scrollY;
  console.log(scrollY);

  if (scrollY > 20) {
    nav.style.position = "fixed";
    nav.style.top = "0";
    nav.style.left = "0";
    nav.style.right = "0";
    nav.style.width = "100%";
    nav.style.backgroundColor = "white";
  } else {
    nav.style.position = "absolute";
    nav.style.top = "0";
    nav.style.backgroundColor = "white";
  }
});
