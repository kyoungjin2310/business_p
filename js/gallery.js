const frame = document.querySelector("#list");
const loading = document.querySelector(".loading");
const input = document.querySelector("#search");
const btnSearch = document.querySelector(".btnSearch");
const key = "f214f4f8200fa66223b5d3c4cc803bbd";
const base = "https://www.flickr.com/services/rest/?";
const photoGet = "flickr.people.getPublicPhotos";
const method_search = "flickr.photos.search";
const user_id = "192490779%40N06";
const photoset_id = "72177720299233022";
const per_page = 20;
const url = `${base}method=${photoGet}&api_key=${key}&user_id=${user_id}&extras=description&per_page=${per_page}&extras=description&privacy_filter=1&format=json&nojsoncallback=1`;

callData(url);

//serch
btnSearch.addEventListener("click", (e) => {
  //delete space
  let tag = input.value.trim();

  //search
  if (tag) {
    const errMsgs = input.parentElement.querySelectorAll("p");
    if (errMsgs.length > 0) errMsgs[0].remove();

    const url = `${base}method=${method_search}&api_key=${key}&user_id=${user_id}&tags=${tag}&extras=description&per_page=${per_page}&format=json&nojsoncallback=1`;
    callData(url);

    //err msg
  } else {
    frame.innerHTML = "";
    frame.style.height = "auto";

    const errMsgs = input.parentElement.querySelectorAll("p");
    if (errMsgs.length > 0) errMsgs[0].remove();

    const errMsg = document.createElement("p");
    errMsg.append("검색어를 입력하세요");
    input.parentElement.append(errMsg);
  }
});

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    let tag = input.value.trim();
    console.log(tag);

    //search
    if (tag) {
      const errMsgs = input.parentElement.querySelectorAll("p");
      if (errMsgs.length > 0) errMsgs[0].remove();

      const url = `${base}method=${method_search}&api_key=${key}&user_id=${user_id}&tags=${tag}&extras=description&per_page=${per_page}&format=json&nojsoncallback=1`;

      callData(url);

      //err msg
    } else {
      frame.innerHTML = "";
      frame.style.height = "auto";

      const errMsgs = input.parentElement.querySelectorAll("p");
      if (errMsgs.length > 0) errMsgs[0].remove();

      const errMsg = document.createElement("p");
      errMsg.append("Please enter your search term.");
      input.parentElement.append(errMsg);
    }
  }
});

//create popup
frame.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e.target);
  let imgSrc = e.target.getAttribute("href");

  let pop = document.createElement("aside");
  pop.classList.add("pop");
  let pops = `
                    <div class="con">
                        <img src=${imgSrc}/>
                    </div>
                    <span class="close">close</span>
        `;
  pop.innerHTML = pops;
  document.body.append(pop);
  document.body.style.overflow = "hidden";
});

//close popup
document.body.addEventListener("click", (e) => {
  let pop = document.querySelector(".pop");

  if (pop) {
    const close = pop.querySelector("span");

    if (e.target == close) {
      pop.remove();
      document.body.style.overflow = "auto";
    }
  }
});

//get data
function callData(url) {
  loading.classList.remove("off");
  frame.classList.remove("on");

  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((json) => {
      let items = json.photos.photo;
      console.log(items);

      if (items.length > 0) {
        createList(items);
        imgLoaded();
      } else {
        console.log("No Images");

        const errMsg = document.createElement("p");
        errMsg.append("No Images");
        input.parentElement.append(errMsg);

        frame.classList.remove("on");
        loading.classList.add("off");
        frame.innerHTML = "";
        frame.style.height = "auto";
      }
    });
}

function createList(items) {
  let htmls = "";
  items.forEach((item) => {
    let imgSrc = `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`;
    let imgSrcBig = `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_b.jpg`;
    htmls += `
                <li class="item">
                    <div>
                        <a href=${imgSrcBig} class="pic">
                            <img src=${imgSrc} />
                        </a>
                        <p>${item.title}</p>
                    </div>
                </li>
        `;
    //photo description html
    // <p>${item.description._content}</p>
  });

  frame.innerHTML = htmls;
}

function imgLoaded() {
  const thumb = document.querySelectorAll(".pic img");
  const len = thumb.length;
  let count = 0;

  thumb.forEach((img) => {
    img.onload = () => {
      count++;
      if (count == len) isoLayout();
    };

    img.onerror = () => {
      img.setAttribute("src", "img/default.jpg");
    };
  });

  const buddies = document.querySelectorAll(".profile img");
  buddies.forEach((buddy) => {
    buddy.onerror = () => {
      buddy.setAttribute("src", "https://www.flickr.com/images/buddyicon.gif");
    };
  });
}

function isoLayout() {
  new Isotope("#list", {
    itemSelector: ".item",
    columnWidth: ".item",
    transitionDuration: "0.5s",
  });

  loading.classList.add("off");
  frame.classList.add("on");
}
