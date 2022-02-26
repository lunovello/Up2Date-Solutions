const slides = document.getElementById("slides");
const sliderDots = document.getElementById("slider-dots");
const sliderArrows = document.getElementById("slider-arrows");
const sliderTime = 8000;
let activeSlide;
let activeDot;
let nextSlide;
let nextDot;

// Initializing slideshow timer
let heroSlideshowInt = setInterval(changeSlide, sliderTime);
initSlider();
changeDots();

function initSlider() {
  // Creating slide ids and dots based on slide count
  const slideArr = [...slides.children];
  slideArr.forEach((slide) => {
    slide.id = `slide${slideArr.indexOf(slide) + 1}`;
    let newDot = document.createElement("button");
    newDot.classList.add("dot");
    newDot.id = `dot${slideArr.indexOf(slide) + 1}`;
    sliderDots.appendChild(newDot);
    // Setting active slide
    slides.firstElementChild.classList.add("slide-active");
    sliderDots.firstElementChild.classList.add("dot-active");
    activeSlide = slides.getElementsByClassName("slide-active")[0];
    activeDot = sliderDots.getElementsByClassName("dot-active")[0];
    nextSlide = activeSlide.nextElementSibling;
    nextDot = activeDot.nextElementSibling;
  });
}
// Function to change slides forward
function changeSlide() {
  clearInterval(heroSlideshowInt);
  activeSlide = slides.getElementsByClassName("slide-active")[0];
  activeDot = sliderDots.getElementsByClassName("dot-active")[0];
  nextSlide = activeSlide.nextElementSibling;
  nextDot = activeDot.nextElementSibling;
  if (
    activeSlide.nextElementSibling === null ||
    activeDot.nextElementSibling === null
  ) {
    nextSlide = slides.firstElementChild;
    nextDot = sliderDots.firstElementChild;
  }
  activeSlide.classList.remove("slide-active");
  activeDot.classList.remove("dot-active");
  nextSlide.classList.add("slide-active");
  nextDot.classList.add("dot-active");
  heroSlideshowInt = setInterval(changeSlide, sliderTime);
}

// set click events to arrows
sliderArrows.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target.localName == "button") {
    clearInterval(heroSlideshowInt);
    activeSlide = slides.getElementsByClassName("slide-active")[0];
    activeDot = sliderDots.getElementsByClassName("dot-active")[0];
    nextSlide = activeSlide.previousElementSibling;
    nextDot = activeDot.previousElementSibling;
    if (event.target.id === "slider-prev") {
      if (
        activeSlide.previousElementSibling === null ||
        activeDot.previousElementSibling === null
      ) {
        nextSlide = slides.lastElementChild;
        nextDot = sliderDots.lastElementChild;
      }
      activeSlide.classList.remove("slide-active");
      activeDot.classList.remove("dot-active");
      nextSlide.classList.add("slide-active");
      nextDot.classList.add("dot-active");
      heroSlideshowInt = setInterval(changeSlide, sliderTime);
    } else if (event.target.id === "slider-next") {
      changeSlide();
    }
  }
});
console.log(sliderDots.children.item(0));

// set click events to dots
function changeDots() {
  for (let i = 0; i < slides.childElementCount; i++) {
    sliderDots.children[i].addEventListener("click", function (event) {
      event.preventDefault();
      clearInterval(heroSlideshowInt);
      activeSlide = slides.getElementsByClassName("slide-active")[0];
      activeDot = sliderDots.getElementsByClassName("dot-active")[0];
      nextSlide = slides.children.item(i);
      nextDot = sliderDots.children.item(i);
      activeSlide.classList.remove("slide-active");
      activeDot.classList.remove("dot-active");
      nextSlide.classList.add("slide-active");
      nextDot.classList.add("dot-active");
      heroSlideshowInt = setInterval(changeSlide, sliderTime);
      console.log(event);
    });
  }
}
