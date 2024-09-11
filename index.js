const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const slides = document.getElementsByClassName("products__slider__card");
let slideIndex = 0;

btnPrev.addEventListener("click", function () {
  if (slideIndex > 0) {
    slideIndex--;
    slides[slideIndex].style.display = "flex";
  }
});

btnNext.addEventListener("click", function () {
  if (slideIndex < 6) {
    slides[slideIndex].style.display = "none";
    slideIndex++;
  }
});

console.log(slides[0]);
