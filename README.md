# 📱 Phone App Simulation

A realistic phone simulation built with vanilla HTML, CSS, and JavaScript. This project mimics a mobile device interface with multiple functional apps that interact with each other, just like a real smartphone.

![Phone App Preview](image/preview.png) <!-- Add a screenshot if you have one -->

## 🌟 Features

### Core Phone Features
- **Double-click to wake** - Simulates unlocking the phone
- **Real-time clock & date** - Updates every second
- **Home screen with app icons** - Navigate between apps

### 📞 Phone (Dialer) App
- **Keypad dialer** - Tap numbers to dial
- **Nigerian number validation** - Validates 080..., 090..., etc.
- **Call simulation** - Ringing, connected state, and timer
- **Contact lookup** - Shows contact name if saved, otherwise "Unknown"
- **Call cost calculation** - ₦0.50/second deducted from balance
- **Recent calls log** - Persistent call history

### 💳 Voucher Card Generator
- **Generate 16-digit PINs** - For MTN, GLO, Airtel, 9Mobile
- **Network-specific cards** - Cards only work on their designated network
- **Card status tracking** - Shows USED/UNUSED status

### 📶 SIM & Airtime System
- **Multi-SIM support** - Switch between MTN, GLO, Airtel, 9Mobile
- **Separate balances** - Each network has its own airtime balance
- **USSD Recharge** - Dial `*311*PIN#` to load airtime
- **Network validation** - Can't load MTN card on GLO, etc.

### 👥 Contacts App
- **Add contacts** - Name and phone number
- **Edit contacts** - Modify existing entries
- **Delete contacts** - Remove unwanted contacts
- **Persistent storage** - Saved in localStorage

### 💬 Messages App
- **Send messages** - To any contact
- **Chat bubble UI** - Modern messaging interface
- **Persistent history** - Messages saved locally

### 🌐 Chrome Browser
- **Google search** - Opens search in new tab
- **Mobile-friendly** - Search button for touch devices

### 🎮 Game (Doodle Jump Clone)
- **Keyboard controls** - Arrow keys or A/D
- **Score tracking** - Points for jumping higher
- **Game over detection** - Fall off screen to lose

### 📸 Camera App
- **Webcam integration** - Uses device camera
- **Take photos** - Capture and download images

### 🎵 Music Player
- **Play/pause controls** - Standard music controls
- **Track information** - Artist and song name display

### 🧮 Calculator
- **Basic operations** - Add, subtract, multiply, divide
- **Clear function** - Reset calculations

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge, Safari)
- VS Code with Live Server extension (recommended)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/SlinkyCollins/Phone-App.git
   ```
2. Open the project folder in VS Code
3. Right-click `index.html` and select "Open with Live Server"
4. Or simply open `index.html` in your browser

### Usage
1. **Wake the phone** - Double-click the phone screen
2. **Open apps** - Click on app icons
3. **Go back home** - Click the home button at the bottom

## 🧪 Testing the Phone System

### Generate & Load Airtime:
1. Go to "Generate Voucher" section (top of page)
2. Select **GLO**, amount **₦500**, quantity **1**
3. Click "Generate Card" and copy the 16-digit PIN
4. Open **Phone App** → Click network badge → Select **GLO**
5. Dial `*311*[PASTE PIN]#` and press call
6. Balance updates to ₦500!

### Make a Call:
1. Ensure you have balance on the active network
2. Dial a valid number (e.g., `08012345678`)
3. Press the green call button
4. Watch the timer run
5. Press red button to end - cost is deducted!

## 🛠️ Tech Stack
- **HTML5** - Structure
- **CSS3** - Styling & animations
- **JavaScript (Vanilla)** - Logic & interactivity
- **LocalStorage** - Data persistence
- **Webcam.js** - Camera functionality

## 📁 Project Structure
```
Phone-App/
├── index.html          # Main HTML file
├── style.css           # Main styles
├── script.js           # Core JavaScript logic
├── music.js            # Music player logic
├── music.css           # Music player styles
├── game.js             # Doodle Jump game logic
├── game.css            # Game styles
├── image/              # App icons & assets
└── README.md           # This file
```

## 🎯 Future Improvements
- [ ] Add SMS receiving simulation
- [ ] Implement call receiving from "other phone"
- [ ] Add more games
- [ ] Dark/Light mode toggle
- [ ] Notification system

## 👨‍💻 Author
**SlinkyCollins**
- GitHub: [@SlinkyCollins](https://github.com/SlinkyCollins)

## 📄 License
This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments
- School project for Web Development Level 2
- Inspired by real smartphone interfaces