let displayValue = '0';

        function appendToDisplay(value) {
            if (displayValue === '0') {
                displayValue = value;
            } else {
                displayValue += value;
            }
            updateDisplay();
        }

        function performOperation(operator) {
            // Implement the logic for performing the operation
            // For simplicity, let's assume the calculator only supports two operands
            displayValue += ' ' + operator + ' ';
            updateDisplay();
        }

        function calculateResult() {
            // Implement the logic to calculate the result
            // For simplicity, let's assume the calculator only supports two operands
            const result = eval(displayValue);
            displayValue = result.toString();
            updateDisplay();
        }

        function clearDisplay() {
            displayValue = '0';
            updateDisplay();
        }

        function updateDisplay() {
            document.getElementById('output').innerText = displayValue;
        }