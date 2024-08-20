function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteElement() {
    let display = document.getElementById("display").value;
    document.getElementById("display").value = display.slice(0, -1);
}

function addNumber(number) {
    document.getElementById("display").value += number;
}

function addOperator(operator) {
    let display = document.getElementById("display").value;
    if (display !== "" && !isNaN(display[display.length - 1])) {
        document.getElementById("display").value += operator;
    }
}

function addDot() {
    let display = document.getElementById("display").value;
        document.getElementById("display").value += '.';
}

function calculate() {
    try {
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (error) {
        alert("Invalid Calculation");
        clearDisplay();
    }
}
