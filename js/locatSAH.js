/* 전체후기 보러가기 */
let goToAllReview = document.getElementById("goToAllReview");
goToAllReview.addEventListener("click", function () {
  location.href = "all_review.html";
});

/* 공연장 정보 보러가기 */
// let goToGGart = document.getElementById("goToGGart");
// console.log(goToGGart);
// goToGGart.addEventListener("click", function () {
//   location.href = "ggart.html";
// });

/* 로그인 창 */
let login = function () {
  let loginArea = document.getElementById("loginArea");
  showAndHide(loginArea);
};

let loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click", login);

/* 회원가입 창 로드 */
let signUp = function () {
  location.href = "signup.html";
};
/* sign up */
let gotoSignup = document.getElementById("gotoSignup");
gotoSignup.addEventListener("click", signUp);

function showAndHide(tagContent) {
  if (tagContent.style.display == "block") {
    tagContent.style.display = "none";
  } else {
    tagContent.style.display = "block";
  }
}
