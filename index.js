const slides = document.getElementById("slides");
const sliderPrev = document.getElementById("slider-prev");
const sliderNext = document.getElementById("slider-next");
const sliderDots = document.getElementById("slider-dots");
let slideCounter = 0;

slides.children[slideCounter].classList.add("slide-active");
sliderDots.children[slideCounter].classList.add("dot-active");

var heroSlideshowInt = setInterval(changeSlideNext, 7000);

function changeSlidePrev() {
  let prevActive = slides.children[slideCounter];
  let prevDot = sliderDots.children[slideCounter];
  slideCounter--;
  if (slideCounter < 0) {
    slideCounter = slides.children.length - 1;
  }
  let active = slides.children[slideCounter];
  let activeDot = sliderDots.children[slideCounter];
  prevActive.classList.remove("slide-active");
  prevDot.classList.remove("dot-active");
  active.classList.add("slide-active");
  activeDot.classList.add("dot-active");
}

function changeSlideNext() {
  let prevActive = slides.children[slideCounter];
  let prevDot = sliderDots.children[slideCounter];
  slideCounter++;
  if (slideCounter >= slides.children.length) {
    slideCounter = 0;
  }
  let active = slides.children[slideCounter];
  let activeDot = sliderDots.children[slideCounter];
  prevActive.classList.remove("slide-active");
  prevDot.classList.remove("dot-active");
  active.classList.add("slide-active");
  activeDot.classList.add("dot-active");
}

console.log(sliderDots.children[slideCounter]);
sliderPrev.addEventListener("click", changeSlidePrev);
sliderNext.addEventListener("click", changeSlideNext);
