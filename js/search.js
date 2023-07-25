let searchBtn = document.querySelector(".search");

let cards = document.querySelectorAll(".card");
let locatVal = document.querySelectorAll(".locatVal");

searchBtn.addEventListener("click", function () {
  let si_val = document.getElementById("si-val").innerText;
  let gu_val = document.getElementById("gu-val").innerText;
  let cate_val = document.getElementById("cate-val").innerText;

  let selectVal = new Array();
  if (si_val !== "시 · 도") {
    selectVal.push(si_val);
  }
  if (gu_val !== "시 · 구 · 군") {
    selectVal.push(gu_val);
  }
  if (cate_val !== "카테고리") {
    selectVal.push(cate_val);
  }
  includeCheck(cards, locatVal, new Array(selectVal.length), selectVal);
});

function includeCheck(cardArr, locatArr, checkArr, valArr) {
  for (let i = 0; i < locatArr.length; i++) {
    checkArr.fill(false);
    for (let j = 0; j < valArr.length; j++) {
      if (locatArr[i].value.includes(valArr[j])) {
        checkArr[j] = true;
      }
    }

    if (tfCheck(checkArr)) {
      cardArr[i].style.display = "flex";
    } else {
      cardArr[i].style.display = "none";
    }
  }
}

function tfCheck(arr) {
  for (let val of arr) {
    if (!val) {
      return false;
    }
  }
  return true;
}
