const btnCall = document.querySelector(".btnCall");
const menuMo = document.querySelector(".menuMo");
const total = document.querySelector(".total");
const current = document.querySelector(".current");
const slide = document.querySelectorAll("#visual .swiper-slide");
const active = document.querySelectorAll("#visual .swiper-pagination-bullet");

//header
btnCall.onclick = (e) => {
  e.preventDefault();

  btnCall.classList.toggle("on");
  menuMo.classList.toggle("on");
};

// visual
total.innerText = slide.length;

const visual = new Swiper("#visual .mySwiper", {
  direction: "horizontal",
  slidesPerView: "auto",
  spaceBetween: 0,
  centeredSlides: false,
  loop: true,
  keyboard: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' + className + '">' + ("0" + (index + 1)) + "</span>"
      );
    },
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  speed: 1000,
  on: {
    slideChange: function () {
      visualActive();
    },
  },
});

visual.autoplay.stop();

const visualBtnStart = document.querySelector("#visual .btnStart");
const visualBtnStop = document.querySelector("#visual .btnStop");

function visualActive() {
  const active = document.querySelectorAll("#visual .swiper-pagination-bullet");
  for (let i = 0; i < active.length; i++) {
    if (active[i].classList.contains("swiper-pagination-bullet-active")) {
      current.innerText = i + 1;
    }
  }
}

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
  loop: true,
  keyboard: true,
  speed: 500,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

window.onload = () => {
  //visual
  visualActive();
};
