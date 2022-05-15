const btnCall = document.querySelector(".btnCall");
const menuMo = document.querySelector(".menuMo");
btnCall.onclick = (e) => {
  e.preventDefault();

  btnCall.classList.toggle("on");
  menuMo.classList.toggle("on");
};

// visual
const visual = new Swiper("#visual .mySwiper", {
  direction: "horizontal",
  slidesPerView: "auto",
  spaceBetween: 0,
  centeredSlides: false,
  grabCursor: true,
  loop: true,
  keyboard: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
});

visual.autoplay.stop();

const visualBtnStart = document.querySelector("#visual .btnStart");
const visualBtnStop = document.querySelector("#visual .btnStop");

visualBtnStart.addEventListener("click", () => {
  visual.autoplay.start();
});
visualBtnStop.addEventListener("click", () => {
  visual.autoplay.stop();
});

//news
const news = new Swiper("#news .mySwiper", {
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 1,
    slideShadows: false,
  },
  direction: "horizontal",
  slidesPerView: 4,
  spaceBetween: 60,
  centeredSlides: false,
  grabCursor: true,
  loop: true,
  keyboard: true,
  speed: 500,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//history
const history = new Swiper("#history .mySwiper", {
  slidesPerView: 2,
  spaceBetween: 100,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  direction: "horizontal",
  grabCursor: true,
  loop: true,
  keyboard: true,
  speed: 500,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//pr
const pr = new Swiper("#pr .mySwiper", {
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 1,
    slideShadows: false,
  },
  direction: "horizontal",
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: false,
  grabCursor: true,
  loop: true,
  keyboard: true,
  speed: 500,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
