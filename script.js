// Voucher Card CSS
let showErr = document.getElementById("showError");

// Global state for Phone App
let generatedVouchers =
  JSON.parse(localStorage.getItem("generatedVouchers")) || [];
// Logic Change: Separate balances per network
let networkBalances = JSON.parse(localStorage.getItem("networkBalances")) || {
  MTN: 0.0,
  GLO: 0.0,
  AIRTEL: 0.0,
  "9MOBILE": 0.0,
};
// Fallback for migration from old single balance system
if (localStorage.getItem("airtimeBalance")) {
  // Optional: Move old balance to default MTN or just ignore
  localStorage.removeItem("airtimeBalance");
}

let callHistory = JSON.parse(localStorage.getItem("callHistory")) || [];
let activeNetwork = localStorage.getItem("activeNetwork") || "MTN";

const display = () => {
  let cardWrapper = document.getElementById("card-wrapper");
  let container = document.getElementById("card-wrapper");
  container.innerHTML = "";
  container.style.display = "block";

  if (generatedVouchers.length === 0) {
    container.innerHTML =
      "<p style='color:white; padding:10px;'>No vouchers generated yet.</p>";
    return;
  }

  generatedVouchers.forEach((v) => {
    let statusColor = v.used ? "red" : "#31AB4D";
    let statusText = v.used ? "USED" : "UNUSED";

    container.innerHTML += `
        <div class="all-cards">
            <div class="all-cards-text">
                <p>${v.network}</p>
                <p class="validation-text" style="color:${statusColor}">${statusText}</p>
                <p>#${v.amount}</p>
            </div>
            <h1 id="validation">${v.pin}</h1>
        </div>
      `;
  });
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
  let invalidNumber = document.getElementById("numErr");

  if (
    input.value == "" ||
    selectCard.value == "Select Card" ||
    amount.value == "Select Amount"
  ) {
    showErr.style.display = "block";
    showErr.innerHTML = `<div>Please fill out all fields <br/> <button onclick="closeError()">OK</button></div>`;
  } else {
    showErr.style.display = "none";
    if (input.value <= 0) {
      invalidNumber.style.display = "block";
      invalidNumber.innerHTML = "Please enter a valid number";
    } else {
      invalidNumber.style.display = "none";
      gen.style.display = "block";

      // Clear previous generated cards visually if you want, or append
      // For now, appending as per original logic

      for (let i = 0; i < input.value; i++) {
        // Generate 16 digit PIN exactly
        let pin = Math.floor(
          1000000000000000 + Math.random() * 9000000000000000
        ).toString();

        // Save to LocalStorage
        generatedVouchers.push({
          pin: pin,
          network: selectCard.value,
          amount: parseInt(amount.value),
          used: false,
        });
        localStorage.setItem(
          "generatedVouchers",
          JSON.stringify(generatedVouchers)
        );

        gen.innerHTML += `<div style="background-color: #292929; color: white;font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; padding:5px;margin: 20px;">
        <div style="display:flex; justify-content:space-between; padding:0px 0px 10px 0px;">
            <p>${selectCard.value}</p>
            <p>#${amount.value}</p>
        </div>
        <p style="font-size:18px;letter-spacing:5px;font-weight:600;">${pin}</p>
        </div>`;
      }
    }
  }
};
// END OF VOUCHER CARD CSS

/* === SIM SWITCHING LOGIC === */

function openSimModal() {
  let modal = document.getElementById("simSelectionModal");
  if (modal) modal.style.display = "flex";
}

function closeSimModal() {
  let modal = document.getElementById("simSelectionModal");
  if (modal) modal.style.display = "none";
}

function changeSim(networkName) {
  // 1. Update Global Variable
  activeNetwork = networkName;

  // 2. Persist to Storage
  localStorage.setItem("activeNetwork", activeNetwork);

  // 3. Update UI Text
  let display = document.getElementById("activeNetworkDisplay");
  if (display) display.innerText = activeNetwork;

  // 4. Update Balance Display for the new network
  updateBalanceDisplay();

  // 5. Close Modal
  closeSimModal();
}

// PHONE CARD CSS
document.addEventListener("DOMContentLoaded", function () {
  updateDateTime();
  setInterval(updateDateTime, 1000);
  updateBalanceDisplay();
  document.getElementById("activeNetworkDisplay").innerText = activeNetwork;
});

function updateBalanceDisplay() {
  // Show balance for the CURRENTLY active network
  let currentBalance = networkBalances[activeNetwork] || 0.0;
  let balanceElem = document.getElementById("airtimeBalance");
  if (balanceElem) balanceElem.innerText = currentBalance.toFixed(2);
}

function updateDateTime() {
  const currentDate = new Date();

  const dateElement = document.getElementById("date");
  const timeElement = document.getElementById("time");

  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  dateElement.textContent = currentDate.toLocaleDateString("en-US", options);
  timeElement.textContent = currentDate.toLocaleTimeString();
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
  if (event.target.closest("player")) return;
  togglePhoneScreen();
});

function togglePhoneScreen() {
  isScreenVisible = !isScreenVisible;
  if (isScreenVisible) {
    screen.style.display = "block";
  } else {
    screen.style.display = "none";
  }
}

// Stop propagation for all apps
[
  chromeBrowser,
  messenger,
  contact,
  newContact,
  callApp,
  game,
  music,
  calculator,
].forEach((app) => {
  app.addEventListener("dblclick", (e) => e.stopPropagation());
});

/* === CALL APP LOGIC === */

// Keypad Input
function pressKey(key) {
  let input = document.getElementById("dialInput");
  if (input.value.length < 25) {
    // Max length to prevent overflow
    input.value += key;
  }
}

function deleteDigit() {
  let input = document.getElementById("dialInput");
  input.value = input.value.slice(0, -1);
}

// Main Initiate Call Function
function initiateCall() {
  let input = document.getElementById("dialInput").value;

  // Check if empty
  if (!input) return;

  // Check for USSD Recharge Pattern (*311*PIN#)
  let rechargeRegex = /^\*311\*(\d{16})#$/;
  let match = input.match(rechargeRegex);

  if (match) {
    // It is a recharge attempt
    let pin = match[1];
    processRecharge(pin);
  } else {
    // Assume it's a phone call
    processPhoneCall(input);
  }
}

function processRecharge(pin) {
  // Find voucher
  let voucherIndex = generatedVouchers.findIndex((v) => v.pin === pin);

  if (voucherIndex !== -1) {
    let voucher = generatedVouchers[voucherIndex];

    // Logic A: Network Check
    // normalize network names for comparison (e.g. "MTN" matches "Mtn")
    if (voucher.network.toUpperCase() !== activeNetwork.toUpperCase()) {
      alert(
        `Failed! This card is for ${voucher.network}, but you are using ${activeNetwork}.`
      );
      return;
    }

    if (voucher.used) {
      alert("This card has already been used!");
    } else {
      // Success
      voucher.used = true;

      // Logic: Update balance for SPECIFIC Network
      if (!networkBalances[activeNetwork]) networkBalances[activeNetwork] = 0;
      networkBalances[activeNetwork] += voucher.amount;

      // Update Storage and UI
      localStorage.setItem("networkBalances", JSON.stringify(networkBalances));
      localStorage.setItem(
        "generatedVouchers",
        JSON.stringify(generatedVouchers)
      );
      updateBalanceDisplay();

      alert(
        `Recharge Successful! You loaded ₦${
          voucher.amount
        } on ${activeNetwork}. New Balance: ₦${networkBalances[
          activeNetwork
        ].toFixed(2)}`
      );
      document.getElementById("dialInput").value = "";
    }
  } else {
    alert("Invalid PIN. Please check and try again.");
  }
}

let callTimerInterval;
let callDuration = 0;
let callCostPerSec = 0.5; // Example cost

function processPhoneCall(number) {
  // Logic C: Validate Phone Number
  // Valid: 11 digits starting with 0, or +234...
  // Simplified regex for Nigeria: Starts with 0, followed by 10 digits
  let phoneRegex = /^0\d{10}$/;
  // Or international
  let intlRegex = /^\+234\d{10}$/;

  if (!phoneRegex.test(number) && !intlRegex.test(number)) {
    alert("Invalid Phone Number. Use format 080... (11 digits)");
    return;
  }

  // Logic E: Balance Check (Per Network)
  let currentBalance = networkBalances[activeNetwork] || 0.0;

  if (currentBalance <= 1.0) {
    alert(`Insufficient Balance on ${activeNetwork}. Please recharge.`);
    return;
  }

  // Start Simulation
  startCallSimulation(number);
}

function startCallSimulation(number) {
  // UI Switch
  document.getElementById("dialerScreen").style.display = "none";
  document.getElementById("activeCallScreen").style.display = "flex"; // Flex from CSS class needs to be applied

  // Set details
  document.getElementById("callName").innerText = "Unknown"; // Could search contacts here
  document.getElementById("callNumber").innerText = number;
  document.getElementById("callStatus").innerText = "Calling...";

  // Simulate "Receiver" picking up after 2 seconds
  setTimeout(() => {
    document.getElementById("callStatus").innerText = "Connected";
    document.getElementById("callStatus").style.animation = "none";
    document.getElementById("callStatus").style.color = "#4caf50";
    startTimer();
  }, 2000);
}

function startTimer() {
  callDuration = 0;
  let timerElem = document.getElementById("callTimer");
  timerElem.innerText = "00:00";

  callTimerInterval = setInterval(() => {
    callDuration++;

    // Format time MM:SS
    let mins = Math.floor(callDuration / 60)
      .toString()
      .padStart(2, "0");
    let secs = (callDuration % 60).toString().padStart(2, "0");
    timerElem.innerText = `${mins}:${secs}`;

    // Deduct balance in real-time or at end? Requirement says "after call ends" but checking low balance is good.
  }, 1000);
}

function endCall() {
  clearInterval(callTimerInterval);

  // Calculate Cost
  let cost = callDuration * callCostPerSec;

  // Logic E: Deduct Balance (Per Network)
  if (callDuration > 0) {
    if (!networkBalances[activeNetwork]) networkBalances[activeNetwork] = 0;
    networkBalances[activeNetwork] -= cost;
    if (networkBalances[activeNetwork] < 0) networkBalances[activeNetwork] = 0;

    localStorage.setItem("networkBalances", JSON.stringify(networkBalances));
    updateBalanceDisplay();
  }

  // Save Log
  let number = document.getElementById("callNumber").innerText;
  let log = {
    number: number,
    duration: callDuration,
    cost: cost,
    date: new Date().toLocaleString(),
  };
  callHistory.unshift(log); // Add to top
  if (callHistory.length > 20) callHistory.pop(); // Keep last 20
  localStorage.setItem("callHistory", JSON.stringify(callHistory));

  // Alert info (optional, helps user see simulation)
  if (callDuration > 0) {
    alert(`Call Ended. Duration: ${callDuration}s. Cost: ₦${cost.toFixed(2)}`);
  }

  // Reset UI
  document.getElementById("activeCallScreen").style.display = "none";
  document.getElementById("dialerScreen").style.display = "flex";
  document.getElementById("dialInput").value = "";
  document.getElementById("callStatus").style.animation = "blink 1.5s infinite";
  document.getElementById("callStatus").style.color = "#ccc";
}

// Recents Logic
function toggleRecents() {    
    let screen = document.getElementById("recentsScreen");
    let dialer = document.getElementById("dialerScreen");
    
    if (!screen || !dialer) {
        console.error("ERROR: recentsScreen or dialerScreen not found in DOM!");
        return;
    }
    
    if (screen.style.display === "flex") {
        screen.style.display = "none";
        dialer.style.display = "flex";
    } else {
        renderRecents();
        screen.style.display = "flex";
        dialer.style.display = "none";
    }
}

function renderRecents() {
  let list = document.getElementById("recentsList");
  list.innerHTML = "";

  callHistory.forEach((log) => {
    // Fix: Add default values for potentially undefined properties
    let duration = log.duration || 0;
    let cost = log.cost || 0;

    let mins = Math.floor(log.duration / 60);
    let secs = log.duration % 60;

    list.innerHTML += `
            <div class="log-item outgoing">
                <div>
                    <i class="fas fa-phone-alt" style="font-size: 10px; margin-right: 5px;"></i>
                    <strong>${log.number}</strong>
                    <div style="color: #666; font-size: 10px;">${log.date}</div>
                </div>
                <div class="duration">
                    ${mins}:${secs.toString().padStart(2, "0")} <br>
                    -₦${cost.toFixed(2)}
                </div>
            </div>
        `;
  });

  if (callHistory.length === 0)
    list.innerHTML =
      "<p style='text-align:center; padding:20px; color:#888;'>No recent calls</p>";
}

function openCallApp() {
  callApp.style.display = "flex"; // Changed to flex for new layout
  innerScreen.style.display = "none";
  wallpaper.style.display = "none";
}

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

camera.addEventListener("dblclick", function (event) {
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
  let contactName = document.getElementById("contactName").value;
  let contactNumber = document.getElementById("contactNumber").value;
  let otherFields = document.getElementById("moreField");
  let moreFieldBtn = document.getElementById("moreFieldBtn");
  moreFieldBtn.style.display = "block";
  otherFields.style.display = "none";
  newContact.style.display = "block";
  contact.style.display = "none";
  innerScreen.style.display = "none";
  wallpaper.style.display = "none";

  contactName.value = "";
  contactNumber.value = "";
}

function goBackContact() {
  newContact.style.display = "none";
  contact.style.display = "block";
  innerScreen.style.display = "none";
  wallpaper.style.display = "none";
}

function saveContact() {
  let contactName = document.getElementById("contactName").value;
  let contactNumber = document.getElementById("contactNumber").value;
  let allContacts = JSON.parse(localStorage.getItem("contacts")) || [];

  if (!contactName || !contactNumber) {
    alert("Please enter both name and phone number.");
    return;
  }

  // Check for duplicates
  let duplicate = allContacts.find(
    (contact) =>
      contact.contactName.toLowerCase() === contactName.toLowerCase() &&
      contact.contactNumber === contactNumber
  );
  if (duplicate) {
    alert("Contact already exists.");
    return;
  }

  let contactObj = { contactName, contactNumber };

  allContacts.push(contactObj);

  localStorage.setItem("contacts", JSON.stringify(allContacts));

  // Clear inputs
  document.getElementById("contactName").value = "";
  document.getElementById("contactNumber").value = "";

  newContact.style.display = "none";
  contact.style.display = "block";
  innerScreen.style.display = "none";
  wallpaper.style.display = "none";

  displayContacts();
}

function displayContacts() {
  let allContacts = JSON.parse(localStorage.getItem("contacts")) || [];
  let contactDisplay = document.getElementById("displayContact");
  let noContactFound = document.getElementById("errorNoContactFound");

  localStorage.setItem("contacts", JSON.stringify(allContacts));

  contactDisplay.innerHTML = "";

  if (allContacts.length > 0) {
    console.log("contact found");
    noContactFound.style.display = "none";

    for (let i = 0; i < allContacts.length; i++) {
      let contactItem = allContacts[0 + i];
      contactDisplay.innerHTML += `
        <div id="contactWrapper">
        <p>${i + 1}.</p>
          <p><strong>Name:</strong> ${contactItem.contactName}</p>
          <p><strong>Phone No:</strong> ${contactItem.contactNumber}</p>
          <button onclick="editContact(${i})" id="editUserContact">Edit</button>
          <button onclick="deleteContact(${i})" id="deleteUserContact">Delete</button>
        </div>
      `;
    }
  } else {
    noContactFound.style.display = "block";
    console.log("no contacts found");
  }
}

function moreField() {
  let otherFields = document.getElementById("moreField");
  let moreFieldBtn = document.getElementById("moreFieldBtn");
  otherFields.style.display = "block";
  moreFieldBtn.style.display = "none";
}

function editContact(i) {
  let contactDisplay = document.getElementById("displayContact");
  let allContacts = JSON.parse(localStorage.getItem("contacts")) || [];

  const editedName = prompt(
    "Enter the new name:",
    allContacts[i]["contactName"]
  );
  const editedPhone = prompt(
    "Enter the new phone number:",
    allContacts[i]["contactNumber"]
  );

  // Update the contact details
  allContacts[i]["contactName"] = editedName.trim();
  allContacts[i]["contactNumber"] = editedPhone.trim();

  // Check if the user clicked "Cancel" or entered empty values
  if (
    editedName === null ||
    editedPhone === null ||
    editedName.trim() === "" ||
    editedPhone.trim() === ""
  ) {
    alert("Edit canceled or invalid input.");
    return;
  }

  // Save the updated contacts to local storage
  localStorage.setItem("contacts", JSON.stringify(allContacts));

  contactDisplay.innerHTML += ``;

  // Display the updated contact list
  displayContacts();
}

function deleteContact(i) {
  let contactDisplay = document.getElementById("displayContact");
  let allContacts = JSON.parse(localStorage.getItem("contacts")) || [];
  allContacts.splice(i, 1);
  contactDisplay.innerHTML += ``;
  localStorage.setItem("contacts", JSON.stringify(allContacts));
  displayContacts();
}

// End of Contacts App

// Messages App
let messages = JSON.parse(localStorage.getItem("messages")) || [];

function sendMessage() {
  let contactInput = document.getElementById("messageRecipient");
  let messageInput = document.getElementById("messageText");

  let contact = contactInput.value;
  let message = messageInput.value;

  if (contact && message) {
    messages.push({
      contact,
      message,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      type: "sent",
    });
    localStorage.setItem("messages", JSON.stringify(messages));

    // Clear inputs
    contactInput.value = "";
    messageInput.value = "";

    displayMessages();
  } else {
    // If inputs are hidden/empty (fallback for initial load if needed), maybe just prompt?
    // But UI has inputs now.
    if (!contact && !message) alert("Please enter a contact and a message");
  }
}

function displayMessages() {
  let list = document.getElementById("messagesList");
  // Don't overwrite the header or inputs, just the list
  list.innerHTML = "";

  if (messages.length > 0) {
    messages.forEach((msg) => {
      let msgDiv = document.createElement("div");
      // Default to 'sent' if type is missing (legacy data)
      let type = msg.type || "sent";
      // Handle legacy data that used 'recipient'
      let contactName = msg.contact || msg.recipient || "Unknown";

      msgDiv.className = `message ${type}`;
      msgDiv.innerHTML = `
        <strong>To: ${contactName}</strong>
        ${msg.message}
        <small>${msg.timestamp}</small>
      `;
      list.appendChild(msgDiv);
    });
    // Scroll to bottom
    list.scrollTop = list.scrollHeight;
  } else {
    list.innerHTML = '<p id="noMessages">No chats yet!🤷‍♂️</p>';
  }
}

// Call displayMessages() when opening the app
function openMessagesApp() {
  // Use flex to maintain the layout defined in CSS
  messenger.style.display = "flex";
  innerScreen.style.display = "none";
  wallpaper.style.display = "none";
  displayMessages();
}

// End of Messages App

// Browser App
function performSearch() {
  let query = document.querySelector("#chromeBrowser input").value;
  if (query) {
    window.open(
      `https://www.google.com/search?q=${encodeURIComponent(query)}`,
      "_blank"
    );
  }
}

// Update openChrome to add event listener
function openChrome() {
  chromeBrowser.style.display = "block";
  innerScreen.style.display = "none";
  wallpaper.style.display = "none";
  document
    .querySelector("#chromeBrowser input")
    .addEventListener("keypress", function (e) {
      if (e.key === "Enter") performSearch();
    });
}

// End of Browser App