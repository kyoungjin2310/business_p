const vidList = document.querySelector(".vidList");
const key = "AIzaSyC3omc-8Wk_cZwj-pkpAlVSxJizrP0IL9k";
const playlistId = "PLTncuNK6QrZPZGm9oJIQ9mhOwuAK91b-v";
const num = 7;
const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${num}`;
const target = document.querySelector(".content");
const loading = document.querySelector(".loading");
createList(url);

vidList.addEventListener("click", (e) => createPop(e));

document.body.addEventListener("click", (e) => closePop(e));

function createList(url) {
  fetch(url)
    .then((data) => {
      console.log(data);
      return data.json();
    })
    .then((json) => {
      let items = json.items;
      console.log(json);

      let result = "";

      items.map((item, index) => {
        let title = item.snippet.title;

        let desc = item.snippet.description;

        let date = item.snippet.publishedAt;
        date = date.split("T")[0];
        result += `
                    <article>
                        <a href="#" data-vid="${item.snippet.resourceId.videoId}">
                            <span class="pic"><img src="${item.snippet.thumbnails.maxres.url}"/></span>
                            <div class="con">
                                <h2>${title}</h2>
                                <p>${desc}</p>
                                <span>${date}</span>
                            </div>
                        </a>
                    </article>
            `;
      });

      vidList.innerHTML = result;
      if (result.length > 0) {
        imgLoaded();
      }
    });
}

function createPop(e) {
  e.preventDefault();
  if (!e.target.closest("a")) return;
  const vidId = e.target.parentElement.getAttribute("data-vid");

  let pop = document.createElement("figure");
  pop.classList.add("pop");
  pop.innerHTML = `
    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${vidId}" frameborder="0" allowfullscreen></iframe>
    <span class="btnClose">close</span>
    `;

  document.body.append(pop);
}

function closePop(e) {
  const pop = document.querySelector(".pop");
  if (pop) {
    const close = pop.querySelector("span");
    if (e.target == close) pop.remove();
  }
}

function imgLoaded() {
  const thumb = document.querySelectorAll(".pic img");
  const frame = document.querySelector(".vidList");
  const len = thumb.length;
  let count = 0;

  thumb.forEach((img) => {
    img.onload = () => {
      count++;
      if (count == len) {
        loading.classList.add("off");
        frame.classList.add("on");
      }
    };
  });
}
