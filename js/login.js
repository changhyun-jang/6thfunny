/* 로그인 시도 시 처리*/
let submitLogin = document.getElementById("submitLogin");
submitLogin.addEventListener("click", function () {
  let id = document.getElementById("inputId").value;
  let pwd = document.getElementById("inputPwd").value;

  let idCheck = false;
  let pwdCheck = false;
  let cookieArr = document.cookie.split("; ");
  for (let ck of cookieArr) {
    let ckArr = ck.split("=");

    if (ckArr[0] == "userid" && ckArr[1] == id) {
      idCheck = true;
    }

    if (ckArr[0] == "password" && ckArr[1] == pwd) {
      pwdCheck = true;
    }
  }

  if (idCheck && pwdCheck) {
    location.reload();
    console.log("로그인 성공");
  } else {
    alert("잘못된 아이디/비밀번호 입니다.");
  }
});

/* 로그인, 로그아웃 상태에 따라 화면 처리 */
window.onload = function () {
  let idCheck = false;
  let pwdCheck = false;
  let cookieArr = document.cookie.split("; ");
  let name = "";
  for (let ck of cookieArr) {
    let idx = ck.split("=");

    if (idx[0] == "userid") {
      idCheck = true;
    }

    if (idx[0] == "password") {
      pwdCheck = true;
    }

    if (idx[0] == "name") {
      name = idx[1];
    }
  }
  console.log(name);
  if (idCheck && pwdCheck) {
    console.log("asdasd");
    loginBtn.removeEventListener("click", login);
    gotoSignup.removeEventListener("click", signUp);
    loginBtn.innerText = "로그아웃";
    gotoSignup.innerText = `${name}님`;
  }
};
