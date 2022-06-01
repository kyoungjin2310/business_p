const header = document.querySelector("#headerSub");
const homeTop = document.querySelector(".top");
const cont_active = document.querySelectorAll(".ani-content");
const cont_active_arr = Array.from(cont_active);
const cont_activeLen = cont_active.length;
let posArr = null;
let enableClick = true;
let cont_base = -700;

// .ani-content active add class
function setPos() {
  posArr = [];
  for (let el of cont_active) {
    posArr.push(el.getBoundingClientRect().top);
  }
}
setPos();

function activation() {
  let scroll = window.scrollY || window.pageYOffset;
  cont_active_arr.forEach((el, index) => {
    if (scroll >= posArr[index] + cont_base) {
      cont_active_arr[index].classList.add("active");
    }
  });
}

window.addEventListener("scroll", (e) => {
  activation();
  let scroll = window.scrollY || window.pageYOffset;

  //header
  if (scroll === 0) {
    header.classList.remove("on");
  } else {
    header.classList.add("on");
  }

  //top btn
  if (scroll >= posArr[1] + cont_base) {
    homeTop.classList.add("on");
  } else {
    homeTop.classList.remove("on");
  }
});

window.onload = () => {
  homeTop.addEventListener("click", (e) => {
    e.preventDefault();
    new Anime(homeTop, {
      prop: "scroll",
      value: 0,
      duration: 500,
    });
  });
};
