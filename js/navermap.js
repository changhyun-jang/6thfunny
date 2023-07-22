/* naver map api */

/* 지도 좌표 리스트 */
var maps = [
  {
    center: new naver.maps.LatLng(37.554113462512, 126.928598960384),
    zoom: 15,
  },
  {
    center: new naver.maps.LatLng(37.520934, 127.122959),
    zoom: 15,
  },
  {
    center: new naver.maps.LatLng(37.54085484198446, 127.00250347248482),
    zoom: 15,
  },
  {
    center: new naver.maps.LatLng(36.64242527620638, 127.46945255175352),
    zoom: 15,
  },
];

/* 좌표기준 map 생성, marker 생성 */
function setMap(idx) {
  var map = new naver.maps.Map("map", maps[idx]);
  //   console.log(map.center.y);
  var marker = new naver.maps.Marker({
    position: new naver.maps.LatLng(map.center.y, map.center.x),
    map: map,
  });
}

/* map div toggle */
function mapToggle(tag) {
  if (tag.style.display == "block") {
    tag.style.display = "none";
  } else {
    tag.style.display = "block";
  }
}

/* 메인 로직 */
let infoContents = document.getElementsByClassName("mapopen");
for (let i = 0; i < infoContents.length; i++) {
  infoContents[i].addEventListener("click", function () {
    let map = this.parentNode.parentNode.nextElementSibling.nextElementSibling;
    console.log(map);
    map.setAttribute("id", "map");
    setMap(i);
    mapToggle(map);
    map.removeAttribute("id");
  });
}
