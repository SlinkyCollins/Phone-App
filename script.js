// Voucher Card CSS
let showErr = document.getElementById("showError");

const display = () => {
  let cardWrapper = document.getElementById("card-wrapper");
  cardWrapper.style.display = "block";
};

const closeError = () => {
  showErr.style.display = "none";
};

const generate = () => {
  let input = document.getElementById("inputId");
  let selectCard = document.getElementById("select-card");
  let amount = document.getElementById("amount");
  let showErr = document.getElementById("showError");
  let gen = document.getElementById("showG");
  let x = Math.round(Math.random() * 1000000000000000);
  let invalidNumber = document.getElementById("numErr");

  // let getObj = { input, selectCard, amount };

  if (
    input.value == "" &&
    selectCard.value == "Select Card" &&
    amount.value == "Select Amount"
  ) {
    showErr.style.display = "block";
    showErr.innerHTML = `<div>Please fill out the empty spaces <br/> <button onclick="closeError()">OK</button></div>`;
  } else if (
    input.value !== "" &&
    selectCard.value == "Select Card" &&
    amount.value == "Select Amount"
  ) {
    showErr.style.display = "block";
    showErr.innerHTML = `<div>Please fill out the remaining empty spaces <br/> <button onclick="closeError()">OK</button></div>`;
  } else if (
    input.value !== "" &&
    selectCard.value !== "Select Card" &&
    amount.value == "Select Amount"
  ) {
    showErr.style.display = "block";
    showErr.innerHTML = `<div>Please fill out the remaining empty spaces <br/> <button onclick="closeError()">OK</button></div>`;
  } else if (
    input.value !== "" &&
    selectCard.value == "Select Card" &&
    amount.value !== "Select Amount"
  ) {
    showErr.style.display = "block";
    showErr.innerHTML = `<div>Please fill out the remaining empty spaces <br/> <button onclick="closeError()">OK</button></div>`;
  } else if (
    input.value == "" &&
    selectCard.value !== "Select Card" &&
    amount.value !== "Select Amount"
  ) {
    showErr.style.display = "block";
    showErr.innerHTML = `<div>Please fill out the remaining empty spaces <br/> <button onclick="closeError()">OK</button></div>`;
  } else if (
    input.value == "" &&
    selectCard.value == "Select Card" &&
    amount.value !== "Select Amount"
  ) {
    showErr.style.display = "block";
    showErr.innerHTML = `<div>Please fill out the remaining empty spaces <br/> <button onclick="closeError()">OK</button></div>`;
  } else if (
    input.value == "" &&
    selectCard.value !== "Select Card" &&
    amount.value == "Select Amount"
  ) {
    showErr.style.display = "block";
    showErr.innerHTML = `<div>Please fill out the remaining empty spaces <br/> <button onclick="closeError()">OK</button></div>`;
  } else {
    showErr.style.display = "none";
    if (input.value <= 0) {
      invalidNumber.style.display = "block";
      invalidNumber.innerHTML = "Please enter a valid number";
    } else {
      invalidNumber.style.display = "none";
      for (i = 0; i < input.value; i++) {
        gen.style.display = "block";
        gen.innerHTML += `<div style="background-color: #292929; color: white;font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; padding:5px;margin: 20px;">
        <div style="display:flex; justify-content:space-between; padding:0px 0px 10px 0px;">
            <p>${selectCard.value}</p>
            <p>#${amount.value}</p>
        </div>
        <p style="font-size:18px;letter-spacing:5px;font-weight:600;">${x}</p>
        </div>`;
      }
    }
  }
};
// END OF VOUCHER CARD CSS


// PHONE CARD CSS
document.addEventListener("DOMContentLoaded", function () {
  updateDateTime(); // Update initially

  // Update every second
  setInterval(updateDateTime, 1000);
});

function updateDateTime() {
  const currentDate = new Date();

  const dateElement = document.getElementById("date");
  const timeElement = document.getElementById("time");

  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);
  const formattedTime = currentDate.toLocaleTimeString();

  dateElement.textContent = `${formattedDate}`;
  timeElement.textContent = `${formattedTime}`;
}

let phone = document.getElementById("phone-container");
let screen = document.getElementById("screen");
let isScreenVisible = false;

screen.style.display = "none";

phone.addEventListener("dblclick", function () {
  togglePhoneScreen();
});

function togglePhoneScreen() {
  isScreenVisible = !isScreenVisible;

  if (isScreenVisible) {
    screen.style.display = "block";
    console.log("Screen is visible");
  } else {
    screen.style.display = "none";
    console.log("Screen is not visible");
  }
}

function openGameApp() {
  alert("Opening Game App");
}

function openCalculator() {
    let calculator = document.getElementById("calc-container");
    let innerScreen = document.getElementById("innerScreen");
    let wallpaper = document.getElementById("mywallpaper");
    calculator.style.display = "block";
    innerScreen.style.display = "none";
    wallpaper.style.display = "none";
    // screen.style.display = "none";
}

function openMusicApp() {
  alert("Opening Music App");
}

function openChrome() {
  alert("Opening Chrome Browser");
}

function openCallApp() {
  alert("Opening Call App");
}

function openContact() {
  alert("Opening Contacts");
}

function openMessagesApp() {
  alert("Opening Messages App");
}

function openCamera() {
  alert("Opening Camera");
}
//END OF PHONE CARD CSS




