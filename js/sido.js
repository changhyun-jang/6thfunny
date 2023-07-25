/* 시, 도 onclick */
let siList = document.getElementById("si-list");
let siLists = siList.children;
for (let si of siLists) {
  si.addEventListener("click", function () {
    document.getElementById("si-val").innerText = this.innerText;
    $(siList).toggleClass("close open");
    document.getElementById("gu-val").innerText = "시 · 구 · 군";
  });
}

/* 카테고리 onclick */
let cate = document.getElementById("cate-val");
let cateList = document.getElementById("cate-list");
cate.addEventListener("click", function () {
  $(cateList).toggleClass("close open");
});

let cateLists = cateList.children;
for (let ca of cateLists) {
  ca.addEventListener("click", function () {
    cate.innerText = this.innerText;
    $(cateList).toggleClass("close open");
  });
}

/* 시, 구, 군 연결*/
let selectContents = document.getElementsByClassName("selectContent");
for (let content of selectContents) {
  content.addEventListener("click", function () {
    let id = $(this).attr("id");
    let guList = document.getElementById("gu-list");
    if (id === "si") {
      let siList = document.getElementById("si-list");
      $(siList).toggleClass("close open");
    } else if (id === "gu") {
      let si_val = document.getElementById("si-val").innerText;

      if (si_val === "시 · 도") {
        alert("시 · 도를 선택해주세요. ");
      } else {
        addGuList(si_val);
        showAndHide(guList);
      }
    }
  });
}

/* 시, 구, 군 list 설정 */
function addGuList(si) {
  let arr;
  switch (si) {
    case "서울":
      console.log("서울");
      arr = seoulArr;
      break;
    case "경기":
      console.log("경기");
      arr = gyeongiArr;
      break;
    case "부산":
      console.log("부산");
      arr = busanArr;
      break;
    case "대구":
      console.log("대구");
      arr = daeguArr;
      break;
    case "인천":
      console.log("인천");
      arr = incheonArr;
      break;
    case "대전":
      console.log("대전");
      arr = daejeonArr;
      break;
    case "광주":
      console.log("광주");
      arr = gwangjuArr;
      break;
    case "울산":
      console.log("울산");
      arr = ulsanArr;
      break;
    case "강원":
      console.log("강원");
      arr = gangwonArr;
      break;
    case "충북":
      console.log("충북");
      arr = chungbukArr;
      break;
    case "충남":
      console.log("충남");
      arr = chnngnamArr;
      break;
    case "전북":
      console.log("전북");
      arr = jeonbukArr;
      break;
    case "전남":
      console.log("전남");
      arr = jeonnamArr;
      break;
    case "경북":
      console.log("경북");
      arr = gyeongbukArr;
      break;
    case "경남":
      console.log("경남");
      arr = gyeongnamArr;
      break;
    case "제주":
      console.log("제주");
      arr = jejuArr;
      break;
      deafult: break;
  }

  let guList = document.getElementById("gu-list");
  guList.innerHTML = "";

  for (let val of arr) {
    let p = document.createElement("p");
    p.innerText = val;
    $(guList).append(p);
  }

  /* 시, 구, 군 선택 시 */
  let guLists = document.getElementById("gu-list").children;
  for (let gu of guLists) {
    gu.addEventListener("click", function () {
      document.getElementById("gu-val").innerText = this.innerText;
      showAndHide(guList);
    });
  }
}
