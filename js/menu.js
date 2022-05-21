const btnCall = document.querySelector(".btnCall");
const menuMo = document.querySelector(".menuMo");

//header
btnCall.onclick = (e) => {
  e.preventDefault();

  btnCall.classList.toggle("on");
  menuMo.classList.toggle("on");
};
