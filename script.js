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
let calculator = document.getElementById("calc-container");
let innerScreen = document.getElementById("innerScreen");
let wallpaper = document.getElementById("mywallpaper");
let music = document.getElementById("player");
let game = document.getElementById("board");
let callApp = document.getElementById("caller");
let contact = document.getElementById("contact");
let newContact = document.getElementById("newContact");
let messenger = document.getElementById("messenger");
let chromeBrowser = document.getElementById("chromeBrowser");
let isScreenVisible = false;

screen.style.display = "none";

phone.addEventListener("dblclick", function (event) {
  if(event.target.closest("player")){
    // Clicking inside the player app, do nothing
    return;
  }

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

chromeBrowser.addEventListener("dblclick", function(event) {
  // Prevent the double click event from reaching the phone screen
  event.stopPropagation();
});

messenger.addEventListener("dblclick", function(event) {
  // Prevent the double click event from reaching the phone screen
  event.stopPropagation();
});

contact.addEventListener("dblclick", function(event) {
  // Prevent the double click event from reaching the phone screen
  event.stopPropagation();
});

newContact.addEventListener("dblclick", function(event) {
  // Prevent the double click event from reaching the phone screen
  event.stopPropagation();
});

callApp.addEventListener("dblclick", function(event) {
  // Prevent the double click event from reaching the phone screen
  event.stopPropagation();
});

game.addEventListener("dblclick", function(event) {
  // Prevent the double click event from reaching the phone screen
  event.stopPropagation();
});

music.addEventListener("dblclick", function(event) {
  // Prevent the double click event from reaching the phone screen
  event.stopPropagation();
});

calculator.addEventListener("dblclick", function(event) {
  // Prevent the double click event from reaching the phone screen
  event.stopPropagation();
});


function openGameApp() {
  alert("Opening Game App, works only on PC");
  game.style.display = "block";
  innerScreen.style.display = "none";
  wallpaper.style.display = "none";
}


function openCalculator() {
    calculator.style.display = "block";
    innerScreen.style.display = "none";
    wallpaper.style.display = "none";
    // screen.style.display = "none";
}


function openChrome() {
  // alert("Opening Chrome Browser");
  chromeBrowser.style.display = "block";
  innerScreen.style.display = "none";
  wallpaper.style.display = "none";
}

function openCallApp() {
  // alert("Opening Call App");
  callApp.style.display = "block";
  innerScreen.style.display = "none";
  wallpaper.style.display = "none";
}

function openContact() {
  // alert("Opening Contacts");
  contact.style.display = "block";
  innerScreen.style.display = "none";
  wallpaper.style.display = "none";
}

function openMessagesApp() {
  // alert("Opening Messages App");
  messenger.style.display = "block";
  innerScreen.style.display = "none";
  wallpaper.style.display = "none";
}

//END OF PHONE CARD CSS


function goBackHome() {
  innerScreen.style.display = "block";
  wallpaper.style.display = "block";
  calculator.style.display = "none";
  callApp.style.display = "none";
  camera.style.display = "none";
  music.style.display = "none";
  game.style.display = "none";
  messenger.style.display = "none";
  contact.style.display = "none";
  newContact.style.display = "none";
  chromeBrowser.style.display = "none";
  webcam.stop();
}

// Camera Script
let camera = document.getElementById("cameraWrapper");

camera.addEventListener("dblclick", function(event) {
  // Prevent the double click event from reaching the phone screen
  event.stopPropagation();
});

const webCamElement = document.getElementById("webCam");
const canvasElement = document.getElementById("canvas");
const webcam = new Webcam(webCamElement, "user", canvasElement);

function takeAPicture() {
  let picture = webcam.snap();
  document.querySelector("a").href = picture;
}

function stopWebCam() {
  webcam.stop();
}

function startWebCam() {
  webcam.start();
}

function openCamera() {
  // alert("Opening Camera");
  camera.style.display = "block";
  innerScreen.style.display = "none";
  wallpaper.style.display = "none";
  webcam.start();
}
// End of Camera script

//Music App
function openMusicApp() {
  // alert("Opening Music App");
  music.style.display = "block";
  innerScreen.style.display = "none";
  wallpaper.style.display = "none";
}

// End of Music App

//Contacts App

function createNewContact() {
  newContact.style.display = "block";
  contact.style.display = "none";
  innerScreen.style.display = "none";
  wallpaper.style.display = "none";
}

function goBackContact() {
  newContact.style.display = "none";
  contact.style.display = "block";
  innerScreen.style.display = "none";
  wallpaper.style.display = "none";
}

function saveContact() {
  let contactNumber = document.getElementById("contactNumber");
  let contactName = document.getElementById("contactName");
  let contactLastName = document.getElementById("contactLastName");
  let contactEmail = document.getElementById("emailInput");
  let contactDisplay = document.getElementById("displayContact");

  contactDisplay.innerText = `
    ${contactName.value}
    ${contactLastName.value}
    ${contactNumber.value}
    ${contactEmail.value}
  `

  contactNumber.value = "";
  contactLastName.value = '';
  contactEmail.value = '';
  contactName.value = "";

  newContact.style.display = "none";
  contact.style.display = "block";
  innerScreen.style.display = "none";
  wallpaper.style.display = "none";
};

function moreField() {
  let otherFields = document.getElementById("moreField");
  let moreFieldBtn = document.getElementById("moreFieldBtn");
  otherFields.style.display = "block";
  moreFieldBtn.style.display = "none";
}
// End of Contacts App

