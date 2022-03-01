const mainContent = document.getElementById("main-content");
const slides = document.getElementById("slides");
const sliderDots = document.getElementById("slider-dots");
const sliderArrows = document.getElementById("slider-arrows");
const sliderTime = 8000;
let activeSlide;
let activeDot;
let nextSlide;
let nextDot;

// Initializing slideshow timer ---------------
let heroSlideshowInt = setInterval(changeSlide, sliderTime);
initSlider();
changeDots();

// SLIDESHOW ---------------
function initSlider() {
  // Creating slide ids and dots based on slide count
  const slideArr = [...slides.children];
  slideArr.forEach((slide) => {
    slide.id = `slide${slideArr.indexOf(slide) + 1}`;
    let newDot = document.createElement("button");
    newDot.classList.add("dot");
    newDot.id = `dot${slideArr.indexOf(slide) + 1}`;
    sliderDots.appendChild(newDot);
    // Setting initiale slide
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
    });
  }
}

// NAV-MENU FOR MOBILE ---------------
const navMobile = document.getElementById("nav-mobile");
const navMobileMenu = document.getElementById("nav-mobile-menu");
const navMobileIcon = document.getElementById("nav-mobile-icon");
const navMobileIconClose = document.getElementById("nav-mobile-icon-close");
const navMobileMenuLinks = document.getElementById("nav-mobile-menu-links");

// Main mobile menu toggle function used by event clickers
// function toggleMobileMenu() {
//   navMobileMenu.classList.toggle("nav-mobile-menu-active");
//   navMobileIconClose.classList.toggle("nav-mobile-icon-close-active");
//   for (let i = 0; i < navMobileMenuLinks.childElementCount; i++) {
//     navMobileMenuLinks.children[i].children[0].classList.toggle(
//       "nav-mobile-links-active"
//     );
//   }
// }

// // set click events to open mobile menu on icon ---------------------
// navMobileIcon.addEventListener("click", function (event) {
//   event.preventDefault();
//   toggleMobileMenu();
// });

// // set click events to close mobile menu on X ---------------------
// navMobileIconClose.addEventListener("click", function (event) {
//   event.preventDefault();
//   toggleMobileMenu();
// });

// // set click events to close mobile menu by clicking off menu ---------------------
// window.addEventListener("click", function (event) {
//   if (navMobileMenu.classList.contains("nav-mobile-menu-active")) {
//     if (!event.composedPath().includes(navMobile)) {
//       toggleMobileMenu();
//     }
//   }
// });

// // Closes mobile menu when you click a link ---------------------
// function initMobileLinks() {
//   for (let i = 0; i < navMobileMenuLinks.childElementCount; i++) {
//     navMobileMenuLinks.children[i].children[0].addEventListener(
//       "click",
//       function (event) {
//         toggleMobileMenu();
//       }
//     );
//   }
// }
// initMobileLinks();

// set click events to close mobile menu by dragging right ---------------------

// function mobileMenuDragClose() {
//   let dragStartX;
//   let dragEndX;
//   let screenWidth;

//   window.addEventListener("dragstart", function (event) {
//     event.preventDefault();
//     dragStartX = event.x;
//   });
//   window.addEventListener("dragend", function (event) {
//     event.preventDefault();
//     dragEndX = event.x;
//     screenWidth = window.innerWidth;
//   });
// }
// mobileMenuDragClose();

// window.addEventListener("scroll", function (event) {
//   console.log(event);
// });

// observer.root.target.style.border = "2px solid #44aa44";

const sections = document.querySelectorAll(`[data-observe]`);
const mobileButtons = document.querySelectorAll(`[data-section]`);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      document
        .querySelector(`[data-section="${entry.target.dataset.observe}"]`)
        .classList.toggle("mobile-nav-active", entry.isIntersecting);
    });
  },
  { rootMargin: "-49% 0px" }
);

sections.forEach((section) => {
  observer.observe(section);
});
