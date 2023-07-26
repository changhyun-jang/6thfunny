/*
    [JS 요약 설명]
    1. window.onload : 브라우저 로드 완료 상태를 나타냅니다 
    2. CryptoJS : 데이터 암호화를 지원해주는 라이브러리입니다 (ex : aes, sha ...)
    3. aes 암호화 : 비밀키 방식으로 인코딩, 디코딩 시 비밀키를 사용합니다
    4. aes 128 : 비밀키 값이 16 바이트 값입니다
    5. aes 192 : 비밀키 값이 24 바이트 값입니다
    6. aes 256 : 비밀키 값이 32 바이트 값입니다
    7. 추가 설명 : 필요 시 추가 lv 설정을 할 수 있으며, lv  바이트 배열값은 16 바이트 고정입니다
    8. 암호화 지원 확인 종류 : https://www.npmjs.com/package/crypto-js
    */

/* [aes 128 인코딩, 디코딩에 필요한 전역 변수 선언] */
var aes128SecretKey = "0123456789abcdef"; // key 값 16 바이트
var aes128Iv = "0123456789abcdef"; //iv 16 바이트

/* [aes128Encode 이벤트 함수 정의] */
function aes128Encode(secretKey, Iv, data) {
  // [aes 인코딩 수행 실시 : cbc 모드]
  const cipher = CryptoJS.AES.encrypt(
    data,
    CryptoJS.enc.Utf8.parse(secretKey),
    {
      iv: CryptoJS.enc.Utf8.parse(Iv), // [Enter IV (Optional) 지정 방식]
      padding: CryptoJS.pad.Pkcs7,
      mode: CryptoJS.mode.CBC, // [cbc 모드 선택]
    }
  );

  return cipher.toString();
}

/* [aes128Decode 이벤트 함수 정의] */
function aes128Decode(secretKey, Iv, data) {
  // [aes 디코딩 수행 실시 : cbc 모드]
  const cipher = CryptoJS.AES.decrypt(
    data,
    CryptoJS.enc.Utf8.parse(secretKey),
    {
      iv: CryptoJS.enc.Utf8.parse(Iv), // [Enter IV (Optional) 지정 방식]
      padding: CryptoJS.pad.Pkcs7,
      mode: CryptoJS.mode.CBC, // [cbc 모드 선택]
    }
  );

  return cipher.toString(CryptoJS.enc.Utf8);
}

/* [aes 256 인코딩, 디코딩에 필요한 전역 변수 선언] */
var aes256SecretKey = "0123456789abcdef0123456789abcdef"; // key 값 32 바이트
var aes256Iv = "0123456789abcdef"; //iv 16 바이트

/* [aes256Encode 이벤트 함수 정의] */
function aes256Encode(secretKey, Iv, data) {
  // [aes 인코딩 수행 실시 : cbc 모드]
  const cipher = CryptoJS.AES.encrypt(
    data,
    CryptoJS.enc.Utf8.parse(secretKey),
    {
      iv: CryptoJS.enc.Utf8.parse(Iv), // [Enter IV (Optional) 지정 방식]
      padding: CryptoJS.pad.Pkcs7,
      mode: CryptoJS.mode.CBC, // [cbc 모드 선택]
    }
  );

  return cipher.toString();
}

/* [aes256Decode 이벤트 함수 정의] */
function aes256Decode(secretKey, Iv, data) {
  // [aes 디코딩 수행 실시 : cbc 모드]
  const cipher = CryptoJS.AES.decrypt(
    data,
    CryptoJS.enc.Utf8.parse(secretKey),
    {
      iv: CryptoJS.enc.Utf8.parse(Iv), // [Enter IV (Optional) 지정 방식]
      padding: CryptoJS.pad.Pkcs7,
      mode: CryptoJS.mode.CBC, // [cbc 모드 선택]
    }
  );

  return cipher.toString(CryptoJS.enc.Utf8);
}
