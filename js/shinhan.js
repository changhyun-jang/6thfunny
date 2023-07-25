// 1층 행별 좌석 갯수
let count1 = {
  1: [8, 16, 8],
  2: [9, 17, 9],
  3: [10, 16, 10],
  4: [10, 17, 10],
  5: [11, 16, 11],
  6: [12, 17, 12],
  7: [13, 16, 13],
  8: [15, 16, 15],
  9: [15, 17, 15],
  10: [15, 16, 15],
  11: [15, 17, 15],
  12: [15, 16, 15],
  13: [15, 17, 15],
  14: [15, 16, 15],
  15: [15, 17, 15],
  16: [15, 16, 15],
  17: [15, 17, 15],
  18: [15, 16, 15],
  19: [15, 17, 15],
  20: [15, 16, 15],
  21: [15, 17, 15],
  22: [15, 16, 15],
};
//2층 행별 좌석 갯수
let count2 = {
  1: [15, 16, 15],
  2: [15, 16, 15],
  3: [15, 16, 15],
  4: [15, 16, 15],
  5: [13, 14, 13],
  6: [13, 13, 13],
  7: [13, 13, 13],
  8: [13, 13, 13],
  9: [13, 13, 13],
  10: [15, 13, 15],
};
// 시작좌석px 1번 좌석 기준, 각 좌석마다 11px씩 늘어남(가로)
let standard_row = 160;
// 열기준 1열 기준, 각행마다 15px씩 늘어남(세로)
let standard_col = 90;

//각 좌석 별 숫자 넣기 위한 변수
let k = 0;
let seat_count = 1;
let first;

// 좌석 생성 및 좌석 배치
for (let i = 1; i < Object.keys(count1).length + 1; i++) {
  let parentNode = document.querySelector(".row_" + i);

  for (let j = 0; j < count1[i][0] + count1[i][1] + count1[i][2]; j++) {
    let make_div = document.createElement("div");
    parentNode.append(make_div);
  }

  let list_row_1 = document.querySelectorAll(".row_" + i + " div");
  for (let j = 0; j < list_row_1.length; j++) {
    list_row_1[j].classList.add("seat");
    let row_place;
    if (i < 8) {
      row_place = standard_col + 15 * (i - 1);
    } else {
      row_place = standard_col + 15 * (i - 1) + 40;
    }

    list_row_1[j].style.top = row_place + "px";
    let col_place;
    if (j < count1[i][0]) {
      col_place = standard_row + 11 * j + 11 * (15 - count1[i][0]);
    }

    if (j >= count1[i][0] && k < count1[i][0] + count1[i][1]) {
      if (count1[i][1] == 16) {
        col_place = 420 + 11 * (j - count1[i][0]) + 5;
      } else {
        col_place = 415 + 11 * (j - count1[i][0]) + 5;
      }
    }
    if (j >= count1[i][0] + count1[i][1]) {
      col_place = 700 + 11 * (j - (count1[i][0] + count1[i][1]));
    }
    list_row_1[j].style.left = col_place + "px";

    if (k === 0) {
      first = 15 - count1[i][k] + 1;
      list_row_1[j].classList.add(15 - count1[i][k] + seat_count);
      seat_count += 1;
      if (seat_count === count1[i][k] + 1) {
        k += 1;
        seat_count = 1;
        let create_text = document.createElement("div");
        create_text.innerText = i;
        create_text.style.fontSize = "3px";
        create_text.style.display = "inline-block";
        create_text.style.position = "relative";
        create_text.style.left = 370 + "px";
        if (i >= 10) {
          create_text.style.left = 367 + "px";
        }
        if (i < 8) {
          create_text.style.top = 90 - 3 * i + "px";
        } else {
          create_text.style.top = 98 - 2.5 * (i - 8) + "px";
        }

        list_row_1[j].after(create_text);
      }
      continue;
    } else if (k === 1) {
      list_row_1[j].classList.add(15 + seat_count);
      seat_count += 1;
      if (seat_count === count1[i][k] + 1) {
        k += 1;
        seat_count = 1;
        let create_text2 = document.createElement("span");
        create_text2.innerText = i;
        create_text2.style.fontSize = "3px";
        create_text2.style.position = "relative";
        create_text2.style.left = 650 + "px";
        if (i >= 10) {
          create_text2.style.left = 642 + "px";
        }
        if (i < 8) {
          create_text2.style.top = 90 - 3 * i + "px";
        } else {
          create_text2.style.top = 98 - 2.5 * (i - 8) + "px";
        }
        list_row_1[j].after(create_text2);
      }
      continue;
    } else {
      list_row_1[j].classList.add(33 + seat_count);
      seat_count += 1;
      if (seat_count === count1[i][k] + 1) {
        k = 0;
        seat_count = 1;
      }
      continue;
    }
  }
}

// 2층좌석 생성
for (let i = 1; i < Object.keys(count2).length + 1; i++) {
  let get_parent = document.querySelector(".row_2_" + i);
  for (let j = 0; j < count2[i][0] + count2[i][1] + count2[i][2]; j++) {
    let make_div = document.createElement("div");
    get_parent.appendChild(make_div);
  }
  let list_row_2 = document.querySelectorAll(".row_2_" + i + " div");
  for (let j = 0; j < list_row_2.length; j++) {
    list_row_2[j].classList.add("seat");
    let row_place;
    row_place = 550 + 15 * (i - 1);

    list_row_2[j].style.top = row_place + "px";
    let col_place;
    if (j < count2[i][0]) {
      col_place = standard_row + 11 * j + 11 * (15 - count2[i][0]);
    }
    if (j >= count2[i][0] && k < count2[i][0] + count2[i][1]) {
      if (count2[i][1] == 16) {
        col_place = 420 + 11 * (j - count2[i][0]) + 5;
      } else if (count2[i][1] == 13) {
        col_place = 435 + 11 * (j - count2[i][0]) + 5;
      } else {
        col_place = 430 + 11 * (j - count2[i][0]) + 5;
      }
    }
    if (j >= count2[i][0] + count2[i][1]) {
      col_place = 700 + 11 * (j - (count2[i][0] + count2[i][1]));
    }
    list_row_2[j].style.left = col_place + "px";

    if (k === 0) {
      first = 15 - count2[i][k] + 1;
      list_row_2[j].classList.add(15 - count2[i][k] + seat_count);
      seat_count += 1;
      if (seat_count === count2[i][k] + 1) {
        k += 1;
        seat_count = 1;
        let create_text3 = document.createElement("span");
        create_text3.innerText = i;
        create_text3.style.fontSize = "3px";
        create_text3.style.position = "relative";
        create_text3.style.left = 370 + "px";
        create_text3.style.top = 145 - 3.5 * i + "px";
        if (i >= 10) {
          create_text3.style.left = 368 + "px";
        }

        list_row_2[j].after(create_text3);
      }
      continue;
    } else if (k === 1) {
      list_row_2[j].classList.add(15 + seat_count);
      seat_count += 1;
      if (seat_count === count2[i][k] + 1) {
        k += 1;
        seat_count = 1;
        let create_text3 = document.createElement("span");
        create_text3.innerText = i;
        create_text3.style.fontSize = "3px";
        create_text3.style.position = "relative";
        create_text3.style.left = 650 + "px";
        create_text3.style.top = 145 - 3.5 * i + "px";
        if (i >= 10) {
          create_text3.style.left = 642 + "px";
        }
        list_row_2[j].after(create_text3);
      }
      continue;
    } else {
      list_row_2[j].classList.add(33 + seat_count);
      seat_count += 1;
      if (seat_count === count2[i][k] + 1) {
        k = 0;
        seat_count = 1;
      }
      continue;
    }
  }
}

let seats2 = document.querySelectorAll(".seat");
for (let i = 0; i < seats2.length; i++) {
  seats2[i].setAttribute("id", `seat_${i}`);
}

let seats_already1 = document.querySelector("#seat_117");
seats_already1.classList.add("alreadyReview");
seats_already1.style.backgroundColor = "orange";
let seats_already2 = document.querySelector("#seat_964");
seats_already2.style.backgroundColor = "orange";
seats_already2.classList.add("alreadyReview");
