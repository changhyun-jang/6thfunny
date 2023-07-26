let seats = document.querySelectorAll(".seat");
let seatId = "";
checkLocalStroage();

for (let i = 0; i < seats.length; i++) {
  seats[i].setAttribute("id", `seat_${i}`);
}

seats.forEach((seat) => {
  if (!seat.classList.contains("alreadyReview")) {
    seat.addEventListener("click", function () {
      seatId = this.getAttribute("id");

      if (this.classList.contains("reviewed")) {
        openReviewModal(`${seatId}_s`);
      } else {
        openModal();
      }
    });
  }
});

// 리뷰 등록
function submitReview() {
  const reviewInput = document.getElementById("reviewInput");
  const review = reviewInput.value;

  addLS(seatId, review);

  closeModal();
  location.reload();
}

function openModal() {
  const modal = document.querySelector(".modal");
  modal.style.display = "block";

  const reviewInput = document.getElementById("reviewInput");
}
function closeModal() {
  const modal = document.querySelector(".modal");
  modal.style.display = "none";
}

function addLS(seatNum, seatContent) {
  localStorage.setItem(
    `${seatNum}_s`,
    JSON.stringify(new SeatObj(seatNum, seatContent))
  );
}

function checkLocalStroage() {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let seatObj = JSON.parse(localStorage.getItem(key));
    let check = key.split("_")[2];

    if (key !== "__mantle_tile_meta_data" && check !== "g") {
      let seatNum = seatObj.objNumber.split("_")[1];
      seats[seatNum].classList.add("reviewed");
    }
  }
}

//리뷰 보기 모달창 열기
function openReviewModal(seatId) {
  const reviewModal = document.querySelector(".reviewModal");
  reviewModal.style.display = "block";

  let content = JSON.parse(localStorage.getItem(seatId)).objContent;

  const reviewContent = document.getElementById("reviewContent");
  reviewContent.innerText = content;
}

//리뷰 보기 모달창 닫기
function closeReviewModal() {
  const reviewModal = document.querySelector(".reviewModal");
  reviewModal.style.display = "none";
}

function SeatObj(objNumber, objContent) {
  this.objNumber = objNumber;
  this.objContent = objContent;
}
