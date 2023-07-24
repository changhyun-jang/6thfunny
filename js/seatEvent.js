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
        openReviewModal(seatId);
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
  console.log(review);

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
  localStorage.setItem(seatNum, seatNum);
  localStorage.setItem(`${seatNum}_c`, seatContent);
}

function checkLocalStroage() {
  if (localStorage.length >= 2) {
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i) === "__mantle_tile_meta_data") continue;
      let key = localStorage.key(i);
      let seatNum = localStorage.getItem(key);
      console.log(key);
      let index = key.split("_")[1];

      seats[index].classList.add("reviewed");
    }
  }
}

// let fileInput = document.getElementById("fileUpload");
// fileInput.onchange = function (e) {
//   let files = e.target.files;
//   console.log(files);
//   console.log(files[0]);
// };

//리뷰 보기 모달창 열기
function openReviewModal(seatId) {
  const reviewModal = document.querySelector(".reviewModal");
  console.log(reviewModal);
  reviewModal.style.display = "block";
  console.log(reviewModal);

  let content = localStorage.getItem(`${seatId}_c`);

  const reviewContent = document.getElementById("reviewContent");
  reviewContent.innerText = content;
}

//리뷰 보기 모달창 닫기
function closeReviewModal() {
  const reviewModal = document.querySelector(".reviewModal");
  reviewModal.style.display = "none";
}
