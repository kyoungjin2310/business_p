const btnCall = document.querySelector(".btnCall");
const menuMo = document.querySelector(".menuMo");
const total = document.querySelector(".total");
const current = document.querySelector(".current");
const slide = document.querySelectorAll("#visual .swiper-slide");
const active = document.querySelectorAll("#visual .swiper-pagination-bullet");
const cont_active = document.querySelectorAll("section");
const cont_active_arr = Array.from(cont_active);
const cont_activeLen = cont_active.length;
let posArr = null;
let enableClick = true;
let base = -500;

console.log(cont_active);

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
  effect: "fade",
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
    delay: 4000,
    disableOnInteraction: true,
  },
  speed: 1000,
  on: {
    slideChange: function () {
      visualActive();
    },
  },
});

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
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1240: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 60,
    },
  },
});

//history
//swiper
const historySwiper = new Swiper("#history .mySwiper", {
  effect: "coverflow",
  coverflowEffect: {
    rotate: 50,
    stretch: -200,
    depth: 0,
    modifier: 1,
    slideShadows: false,
  },
  slidesPerView: 2,
  spaceBetween: 60,
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
  on: {
    activeIndexChange: function () {
      //swiper
      const i = this.realIndex + 2;

      //target
      const historySetYear = document.querySelector(".setDate .year");
      const historySetMmdd = document.querySelector(".setDate .mmdd");
      const historySetkeyword = document.querySelector(".setTitle .keyword1");
      const historySetkeyword_ = document.querySelector(".setTitle .keyword2");
      const historySetTxt = document.querySelector(".setTxt");
      const hToggleClass = document.querySelector(".historyActive");
      //history txt
      const historyGetKeyword = document.querySelectorAll(
        ".getTitle .keyword1"
      );
      const historyGetKeyword_ = document.querySelectorAll(
        ".getTitle .keyword2"
      );
      const historyGetTxt = document.querySelectorAll(".getTxt");
      let hKeywordArr = [];
      let hKeywordArr_ = [];
      let hTxtArr = [];
      getTxt(historyGetKeyword, hKeywordArr);
      getTxt(historyGetKeyword_, hKeywordArr_);
      getTxt(historyGetTxt, hTxtArr);
      function getTxt(element, arr) {
        for (let el of element) {
          const txt = el.innerText;
          arr.push(txt);
        }
      }

      //img date
      const img = document.querySelectorAll("#history img");
      let imgArrYear = [];
      let imgArrMmdd = [];
      for (let el of img) {
        const imgAttr = el.getAttribute("alt");
        let imgYear = imgAttr.substring(0, 4);
        let imgMmdd = imgAttr.substring(5, 10);
        imgArrYear.push(imgYear);
        imgArrMmdd.push(imgMmdd);
      }

      setTimeout(() => {
        hToggleClass.classList.remove("active");
        setTimeout(() => {
          historySetYear.innerText = imgArrYear[i];
          historySetMmdd.innerText = imgArrMmdd[i];
          historySetkeyword.innerText = hKeywordArr[i];
          historySetkeyword_.innerText = hKeywordArr_[i];
          historySetTxt.innerText = hTxtArr[i];
          hToggleClass.classList.add("active");
        }, 1000);
      }, 0);
    },
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows: false,
      },
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 30,
      coverflowEffect: {
        rotate: 50,
        stretch: -50,
        depth: 0,
        modifier: 1,
        slideShadows: false,
      },
    },
    1290: {
      slidesPerView: 2,
      spaceBetween: 40,
      coverflowEffect: {
        rotate: 50,
        stretch: -200,
        depth: 0,
        modifier: 1,
        slideShadows: false,
      },
    },
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
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    750: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1240: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// .ani-content active add class
function setPos() {
  posArr = [];
  for (let el of cont_active) {
    posArr.push(el.offsetTop);
    console.log(el.offsetTop);
  }
}
setPos();

function activation() {
  let scroll = window.scrollY || window.pageYOffset;
  cont_active_arr.forEach((el, index) => {
    if (scroll >= posArr[index] + base) {
      cont_active_arr[index].classList.add("active");
    }
  });
}

window.addEventListener("scroll", (e) => {
  activation();
});

window.onload = () => {
  //visual
  visualActive();
};
