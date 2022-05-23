const banner = document.querySelector("#banner");
const wrap = document.querySelector(".contentWrap");
const list = banner.querySelector(".list");
const prev = banner.querySelector(".prev");
const next = banner.querySelector(".next");
const practiceImgWrap = document.querySelector(".imgWrap");
let num = -240;
let wid = 0;
let timer = null;
let aniEnableClick = true;

createList("data.json");

timer = setInterval(move, 50);

banner.addEventListener("mouseenter", () => {
  clearInterval(timer);
});

banner.addEventListener("mouseleave", () => {
  timer = setInterval(move, 50);
});

next.addEventListener("click", (e) => {
  e.preventDefault();
  if (aniEnableClick) {
    nextEl();
    aniEnableClick = false;
  }
});

prev.addEventListener("click", (e) => {
  e.preventDefault();
  if (aniEnableClick) {
    prevEl();
    aniEnableClick = false;
  }
});

list.addEventListener("click", (e) => {
  e.preventDefault();

  const imgSrc = e.target.parentElement.getAttribute("href");
  setTimeout(() => {
    practiceImgWrap.classList.remove("on");
    setTimeout(() => {
      createPop(imgSrc);
      practiceImgWrap.classList.add("on");
    }, 300);
  }, 0);
});

//data
function createList(url) {
  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((json) => {
      let items = json.imgSrc;
      console.log(items);

      let tags = "";

      items.forEach((item) => {
        tags += `
                    <li>
                        <a href=${item.pic}>
                            <img src=${item.pic}>
                            <span></span>
                        </a>
                    </li>
            `;
      });

      list.innerHTML = tags;

      initList();
    })
    .catch((err) => {
      console.log("데이터를 호출하는데 실패했습니다!");
    });
}

function initList() {
  const list_li = list.querySelectorAll("li");
  const len = list_li.length;
  wid = parseInt(getComputedStyle(list_li[0]).width);
  list.style.width = len * wid + "px";
  list.style.marginLeft = -wid + "px";
  list.prepend(list.lastElementChild);
}

function move() {
  if (num < -wid * 2) {
    num = -wid;
    list.append(list.firstElementChild);
  } else {
    num -= 1;
  }
  list.style.marginLeft = num + "px";
}

function nextEl() {
  new Anime(list, {
    prop: "margin-left",
    value: -wid * 2,
    duration: 500,
    callback: () => {
      list.append(list.firstElementChild);
      list.style.marginLeft = -wid + "px";
      aniEnableClick = true;
    },
  });
}

function prevEl() {
  new Anime(list, {
    prop: "margin-left",
    value: 0,
    duration: 500,
    callback: () => {
      list.prepend(list.lastElementChild);
      list.style.marginLeft = -wid + "px";
      aniEnableClick = true;
    },
  });
}

function createPop(imgSrc) {
  const practiceImg = document.querySelector(".imgWrap img");
  practiceImg.setAttribute("src", imgSrc);
}
