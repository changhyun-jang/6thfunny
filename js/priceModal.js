let prices = [
  {
    type: ["전석"],
    price: ["99,000원"],
  },
  {
    type: ["VIP석", "SR석", "R석", "S석", "A석"],
    price: ["250,000원", "220,000원", "198,000원", "165,000원", "132,000원"],
  },
  {
    type: ["VIP석", "OP석", "R석", "S석", "A석"],
    price: ["170,000원", "160,000원", "140,000원", "110,000원", "80,000원"],
  },
  {
    type: ["R석", "S석", "A석", "B석"],
    price: ["120,000원", "90,000원", "60,000원", "40,000원"],
  },
  {
    type: ["전석"],
    price: ["19,800원"],
  },
  {
    type: ["전석"],
    price: ["35,000원"],
  },
];

/* modal */
let modalCosts = document.getElementsByClassName("costs");
let closeButton = document.getElementById("closeBtn");

for (let i = 0; i < modalCosts.length; i++) {
  modalCosts[i].addEventListener("click", function () {
    let mcs = document.querySelectorAll(".mc");
    for (let mc of mcs) {
      mc.remove();
    }

    let modalbody = document.getElementById("modalBody");

    for (let j = 0; j < prices[i].type.length; j++) {
      let content = document.createElement("div");
      content.setAttribute("class", "mc");
      content.innerHTML = `<span class="infolabel mil">${prices[i].type[j]}</span><span class="infocontent mit">${prices[i].price[j]}</span>`;
      modalbody.append(content);
    }
    modalToggle();
  });
}

let modal = document.getElementById("modalWrap");
function modalToggle() {
  if (modal.style.display == "block") {
    modal.style.display = "none";
  } else {
    modal.style.display = "block";
  }
}
closeButton.addEventListener("click", function () {
  modal.style.display = "none";
});
