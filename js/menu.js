const btnCall = document.querySelector(".btnCall");
const menuMo = document.querySelector(".menuMo");
const gnb_li = document.querySelectorAll(" #gnb > li");
const gnb_a = document.querySelectorAll(" #gnb > li > a");
const skipNavi = document.querySelectorAll("#skipNavi li a");

//skip navi
for (let el of skipNavi) {
  el.addEventListener("focusin", (e) => {
    el.classList.add("on");
  });

  el.addEventListener("focusout", (e) => {
    el.classList.remove("on");
  });
}

//mobile
btnCall.onclick = (e) => {
  e.preventDefault();

  btnCall.classList.toggle("on");
  menuMo.classList.toggle("on");
};

gnb_a.forEach((el, idx) => {
  const li = el.closest("li");
  el.addEventListener("focusin", () => {
    menuActivation(gnb_li, idx);
  });
  li.addEventListener("mouseenter", () => {
    menuActivation(gnb_li, idx);
  });

  li.addEventListener("mouseleave", (e) => {
    li.classList.remove("on");
  });

  if (idx == gnb_a.length - 1) {
    gnb_a[idx].addEventListener("focusout", (e) => {
      li.classList.remove("on");
    });
  }
});

function menuActivation(arr, index) {
  for (const el of arr) {
    el.classList.remove("on");
  }
  arr[index].classList.add("on");
}
