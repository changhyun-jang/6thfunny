/* 로그인 시도 시 처리*/
let submitLogin = document.getElementById("submitLogin");
submitLogin.addEventListener("click", function () {
  let id = document.getElementById("inputId").value;
  let pwd = document.getElementById("inputPwd").value;

  let idCheck = false;
  let pwdCheck = false;

  let encodeId = aes256Encode(aes256SecretKey, "", id);
  let encodePwd = aes256Encode(aes256SecretKey, "", pwd);

  if (
    sessionStorage.getItem(encodeId) === encodeId &&
    sessionStorage.getItem(encodePwd) === encodePwd
  ) {
    let name = sessionStorage.getItem(`${encodeId}_name`);
    let decodeName = aes256Decode(aes256SecretKey, "", name);

    let date = new Date();
    date.setDate(date.getDate() + 1);

    document.cookie = `userid=${encodeId}; expires=${date.toUTCString()}`;
    document.cookie = `password=${encodePwd}; expires=${date.toUTCString()}`;
    document.cookie = `name=${decodeName}; expires=${date.toUTCString()}`;

    location.reload();
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
  if (idCheck && pwdCheck) {
    loginBtn.removeEventListener("click", login);
    loginBtn.addEventListener("click", logout);
    gotoSignup.removeEventListener("click", signUp);
    loginBtn.innerText = "로그아웃";
    gotoSignup.innerText = `${name}님`;
  } else {
    loginBtn.addEventListener("click", login);
  }
};

/* 로그아웃 */
let logout = function () {
  document.cookie = "userid=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
  document.cookie = "password=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
  document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 UTC";

  location.reload();
};
