let curPos = 0;
let postion = 0;
let now = 0;
//배경
let bg = document.querySelector(".bg");
//review 클래스를 가진 div 태그들 모두 배열에 담기
let list = document.querySelectorAll(".review");
//팝업 열음 함수
const open = () => {
  document.querySelector(".modalpop").classList.remove("hidden");
};

//팝업 닫음 함수
const close = () => {
  document.querySelector(".modalpop").classList.add("hidden");
};
//이전 버튼 함수
const prev = () => {
  let target1 = document.querySelector(".next");
  if (target1.disabled === true) {
    target1.disabled = false;
  }
  let list = document.querySelectorAll(".review");
  list[now].classList.add("hidden");
  now--;
  list[now].classList.remove("hidden");
  if (now === 0) {
    let target2 = document.querySelector(".prev");
    target2.disabled = true;
  }
};

//다음 버튼 함수
const next = () => {
  let target1 = document.querySelector(".prev");
  if (target1.disabled === true) {
    target1.disabled = false;
  }
  let list = document.querySelectorAll(".review");
  list[now].classList.add("hidden");
  now++;
  list[now].classList.remove("hidden");
  if (now === list.length - 1) {
    let target2 = document.querySelector(".next");
    target2.disabled = true;
  }
};

// 포도알역할 대신 친구 선택시 팝업 열림(open함수 실행)
document.querySelector(".alreadyReview").addEventListener("click", open);

// x표시 선택시 팝업 닫힘(close함수 실행)
document.querySelector(".closeBtn").addEventListener("click", close);

// 팝업이 아닌 배경 선택시 닫힘(close함수 실행)
document.querySelector(".bg").addEventListener("click", close);

// 팝업에서 이전 버튼 클릭했을때
document.querySelector(".prev").addEventListener("click", prev);

// 팝업에서 다음 버튼 클릭했을때
document.querySelector(".next").addEventListener("click", next);
