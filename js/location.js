var mapContainer = document.getElementById("map");
const t_on = document.querySelectorAll(".traffic li")[0];
const t_off = document.querySelectorAll(".traffic li")[1];
const branch_btns = document.querySelectorAll(".branch li");

/* map option */
var mapOption = {
  center: new kakao.maps.LatLng(37.521621187062635, 126.92418547602782),
  level: 3,
};

var map = new kakao.maps.Map(mapContainer, mapOption);

let drag = true;
let zoom = true;

let markerOptions = [
  {
    title: "Aléatoire",
    latlng: new kakao.maps.LatLng(37.521621187062635, 126.92418547602782),
    imgSrc: "img/marker1.png",
    imgSize: new kakao.maps.Size(143, 57),
    imgPos: { offset: new kakao.maps.Point(71, 57) },
    button: branch_btns[0],
  },
  {
    title: "Aléatoire branch",
    latlng: new kakao.maps.LatLng(37.51427346443888, 127.06024299848379),
    imgSrc: "img/marker2.png",
    imgSize: new kakao.maps.Size(127, 57),
    imgPos: { offset: new kakao.maps.Point(62, 57) },
    button: branch_btns[1],
  },
];

for (let i = 0; i < markerOptions.length; i++) {
  var marker = new kakao.maps.Marker({
    map: map,
    position: markerOptions[i].latlng,
    title: markerOptions[i].title,
    image: new kakao.maps.MarkerImage(
      markerOptions[i].imgSrc,
      markerOptions[i].imgSize,
      markerOptions[i].imgPos
    ),
  });

  /* branch btn */
  markerOptions[i].button.addEventListener("click", (e) => {
    e.preventDefault();
    for (let branch of branch_btns) {
      branch.classList.remove("on");
    }
    markerOptions[i].button.classList.add("on");
    moveTo(markerOptions[i].latlng);
  });
}

/* resizing */
window.addEventListener("resize", () => {
  let active = document.querySelector(".branch li.on");

  const branch = Array.from(branch_btns);
  let active_index = branch.indexOf(active);
  map.setCenter(markerOptions[active_index].latlng);
});

/* control */
//map
var mapTypeControl = new kakao.maps.MapTypeControl();
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

//zoom
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

/* drag */
setDraggable(drag);
function setDraggable(draggable) {
  map.setDraggable(draggable);
}

/* zoom */
setZoomable(zoom);
function setZoomable(zoomable) {
  map.setZoomable(zoomable);
}

/* map move */
function moveTo(target) {
  var moveLatLon = target;
  map.setCenter(moveLatLon);
}
