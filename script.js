let showErr = document.getElementById("showError");

        const display = () => {
            let cardWrapper = document.getElementById("card-wrapper");
            cardWrapper.style.display = "block";
        }

        const closeError = () => {
            showErr.style.display = "none";
        }

        const generate = () => {
            let input = document.getElementById("inputId");
            let selectCard = document.getElementById("select-card");
            let amount = document.getElementById("amount");
            let showErr = document.getElementById("showError");
            let gen = document.getElementById("showG");
            let x = Math.round(Math.random() * 1000000000000000);
            let invalidNumber = document.getElementById("numErr");

            // let getObj = { input, selectCard, amount };

            if (input.value == "" && selectCard.value == "Select Card" && amount.value == "Select Amount") {
                showErr.style.display = "block";
                showErr.innerHTML = `<div>Please fill out the empty spaces <br/> <button onclick="closeError()">OK</button></div>`;
            } else if (input.value !== "" && selectCard.value == "Select Card" && amount.value == "Select Amount") {
                showErr.style.display = "block";
                showErr.innerHTML = `<div>Please fill out the remaining empty spaces <br/> <button onclick="closeError()">OK</button></div>`;
            } else if (input.value !== "" && selectCard.value !== "Select Card" && amount.value == "Select Amount") {
                showErr.style.display = "block";
                showErr.innerHTML = `<div>Please fill out the remaining empty spaces <br/> <button onclick="closeError()">OK</button></div>`;
            } else if (input.value !== "" && selectCard.value == "Select Card" && amount.value !== "Select Amount") {
                showErr.style.display = "block";
                showErr.innerHTML = `<div>Please fill out the remaining empty spaces <br/> <button onclick="closeError()">OK</button></div>`;
            } else if (input.value == "" && selectCard.value !== "Select Card" && amount.value !== "Select Amount") {
                showErr.style.display = "block";
                showErr.innerHTML = `<div>Please fill out the remaining empty spaces <br/> <button onclick="closeError()">OK</button></div>`;
            } else if (input.value == "" && selectCard.value == "Select Card" && amount.value !== "Select Amount") {
                showErr.style.display = "block";
                showErr.innerHTML = `<div>Please fill out the remaining empty spaces <br/> <button onclick="closeError()">OK</button></div>`;
            } else if (input.value == "" && selectCard.value !== "Select Card" && amount.value == "Select Amount") {
                showErr.style.display = "block";
                showErr.innerHTML = `<div>Please fill out the remaining empty spaces <br/> <button onclick="closeError()">OK</button></div>`;
            } else {
                showErr.style.display = "none";
                if (input.value <= 0) {
                    invalidNumber.style.display = 'block';
                    invalidNumber.innerHTML = "Please enter a valid number"
                } else {
                    invalidNumber.style.display = 'none';
                    for (i = 0; i < input.value; i++) {
                        gen.style.display = "block";
                        gen.innerHTML += `<div style="background-color: #292929; color: white;font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; padding:5px;margin: 20px;">
                <div style="display:flex; justify-content:space-between; padding:0px 0px 10px 0px;">
                    <p>${selectCard.value}</p>
                    <p>#${amount.value}</p>
                </div>
                <p style="font-size:18px;letter-spacing:5px;font-weight:600;">${x}</p>
                </div>`
                    }
                }
            }
        }