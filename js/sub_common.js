const cont_active = document.querySelectorAll(".ani-content");
const cont_active_arr = Array.from(cont_active);
const cont_activeLen = cont_active.length;
let posArr = null;
let enableClick = true;
let base = -700;

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
    if (scroll >= posArr[index] + base) {
      cont_active_arr[index].classList.add("active");
    }
  });
}

window.addEventListener("scroll", (e) => {
  activation();
});
