let loginBtn = document.querySelector(".sign");

let cookies = document.cookie;

let ckArr = cookies.split("; ");

let idCheck = false;
let pwdCheck = false;
for (let ck of ckArr) {
  let arr = ck.split("=");

  if (arr[0] == "userid") {
    idCheck = true;
  }

  if (arr[0] == "password") {
    pwdCheck = true;
  }
}

if (idCheck && pwdCheck) {
  loginBtn.innerText = "로그아웃";
}
