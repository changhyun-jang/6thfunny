/* 리뷰 전용 naver map api */

/* 지도 좌표 리스트 */
var maps = [
  {
    center: new naver.maps.LatLng(37.5405014, 127.0025123),
    zoom: 15,
  },
  {
    center: new naver.maps.LatLng(37.5405014, 127.0025123),
    zoom: 15,
  },
  {
    center: new naver.maps.LatLng(37.5405014, 127.0025123),
    zoom: 15,
  },
  {
    center: new naver.maps.LatLng(37.2613186, 127.036806),
    zoom: 15,
  },
  {
    center: new naver.maps.LatLng(37.5405014, 127.0025123),
    zoom: 15,
  },
  {
    center: new naver.maps.LatLng(37.2613186, 127.036806),
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
    map.setAttribute("id", "map");
    setMap(i);
    mapToggle(map);
    map.removeAttribute("id");
  });
}
