const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');

const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const equals = document.getElementById('equal')
const allclear = document.getElementById('allclear');

const display = document.getElementById('displayText');

let inputOne = '';
let inputTwo = '';
let operator = '';
let operatorSelected = false;
let result = ''

function numberKeypad() {
    one.addEventListener('click', () => {
        if (operatorSelected == false) {
            inputOne += "1"
            Display();
        } else {
            inputTwo += "1"
            Display();
        }
    })
    two.addEventListener('click', () => {
        if (operatorSelected == false) {
            inputOne += "2"
            Display();
        } else {
            inputTwo += "2"
            Display();
        }
    })
    three.addEventListener('click', () => {
        if (operatorSelected == false) {
            inputOne += "3"
            Display();
        } else {
            inputTwo += "3"
            Display();
        }
    })
    four.addEventListener('click', () => {
        if (operatorSelected == false) {
            inputOne += "4"
            Display();
        } else {
            inputTwo += "4"
            Display();
        }
    })
    five.addEventListener('click', () => {
        if (operatorSelected == false) {
            inputOne += "5"
            Display();
        } else {
            inputTwo += "5"
            Display();
        }
    })
    six.addEventListener('click', () => {
        if (operatorSelected == false) {
            inputOne += "6"
            Display();
        } else {
            inputTwo += "6"
            Display();
        }
    })
    seven.addEventListener('click', () => {
        if (operatorSelected == false) {
            inputOne += "7"
            Display();
        } else {
            inputTwo += "7"
            Display();
        }
    })
    eight.addEventListener('click', () => {
        if (operatorSelected == false) {
            inputOne += "8"
            Display();
        } else {
            inputTwo += "8"
            Display();
        }
    })
    nine.addEventListener('click', () => {
        if (operatorSelected == false) {
            inputOne += "9"
            Display();
        } else {
            inputTwo += "9"
            Display();
        }
    })
    zero.addEventListener('click', () => {
        if (operatorSelected == false) {
            inputOne += "0"
            Display();
        } else {
            inputTwo += "0"
            Display();
        }
    })
};

function operatorKeypad() {
    add.addEventListener('click', () => {
        if (inputOne === '') {
            display.innerHTML = `ERROR`;
        } else if (operator != "+" && operator != '') {
            Operate(operator, parseInt(inputOne, 10), parseInt(inputTwo, 10));
            operator = "+"
        } else if (inputOne != '' && inputTwo != '') {
            operator = "+"
            operatorSelected = true;
            Operate(operator, parseInt(inputOne, 10), parseInt(inputTwo, 10));
        } else {
            if (operatorSelected === false) {
                operator = "+"
                operatorSelected = true;
                display.innerHTML = `${inputOne}`;
            }
            else if (operatorSelected === true) {
                operator = "+"
                operatorSelected = false;
                display.innerHTML = `${inputOne}`;
                Operate(operator, parseInt(inputOne, 10), parseInt(inputTwo, 10));
            }
        }

    })
    subtract.addEventListener('click', () => {
        if (inputOne === '') {
            display.innerHTML = `ERROR`;
        } else if (operator != "-" && operator != '') {
            Operate(operator, parseInt(inputOne, 10), parseInt(inputTwo, 10));
            operator = "-"
        } else if (inputOne != '' && inputTwo != '') {
            operator = "-"
            operatorSelected = true;
            Operate(operator, parseInt(inputOne, 10), parseInt(inputTwo, 10));
        } else {
            if (operatorSelected === false) {
                operator = "-"
                operatorSelected = true;
                display.innerHTML = `${inputOne}`;
            }
            else if (operatorSelected === true) {
                operator = "-"
                operatorSelected = false;
                display.innerHTML = `${inputOne}`;
                Operate(operator, parseInt(inputOne, 10), parseInt(inputTwo, 10));
            }
        }
    })
    multiply.addEventListener('click', () => {
        if (inputOne === '') {
            display.innerHTML = `ERROR`;
        } else if (operator != "*" && operator != '') {
            Operate(operator, parseInt(inputOne, 10), parseInt(inputTwo, 10));
            operator = "*"
        } else if (inputOne != '' && inputTwo != '') {
            operator = "*"
            operatorSelected = true;
            Operate(operator, parseInt(inputOne, 10), parseInt(inputTwo, 10));
        } else {
            if (operatorSelected === false) {
                operator = "*"
                operatorSelected = true;
                display.innerHTML = `${inputOne}`;
            }
            else if (operatorSelected === true) {
                operator = "*"
                operatorSelected = false;
                display.innerHTML = `${inputOne}`;
                Operate(operator, parseInt(inputOne, 10), parseInt(inputTwo, 10));
            }
        }
    })
    divide.addEventListener('click', () => {
        if (inputOne === '') {
            display.innerHTML = `ERROR`;
        } else if (operator != "/" && operator != '') {
            Operate(operator, parseInt(inputOne, 10), parseInt(inputTwo, 10));
            operator = "/"
        } else if (inputOne != '' && inputTwo != '') {
            operator = "/"
            operatorSelected = true;
            Operate(operator, parseInt(inputOne, 10), parseInt(inputTwo, 10));
        } else {
            if (operatorSelected === false) {
                operator = "/"
                operatorSelected = true;
                display.innerHTML = `${inputOne}`;
            }
            else if (operatorSelected === true) {
                operator = "/"
                operatorSelected = false;
                display.innerHTML = `${inputOne}`;
                Operate(operator, parseInt(inputOne, 10), parseInt(inputTwo, 10));
            }
        }
    })
};

function getEquals() {
    equals.addEventListener('click', () => {
        Operate(operator, parseInt(inputOne, 10), parseInt(inputTwo, 10));
        operatorSelected = false;
        operator = '';
    })
}

function Add(num1, num2) {
    result = num1 + num2;
    inputOne = result;
    display.innerHTML = `${inputOne}`;
    bounceDisplay();
    inputTwo = '';
};

function Subtract(num1, num2) {
    result = num1 - num2;
    inputOne = result;
    display.innerHTML = `${inputOne}`;
    bounceDisplay();
    inputTwo = '';
};

function Multiply(num1, num2) {
    result = num1 * num2;
    inputOne = result;
    display.innerHTML = `${inputOne}`;
    bounceDisplay();
    inputTwo = '';
};

function Divide(num1, num2) {
    if (num1 === 0 || num2 === 0) {
        display.innerHTML = `ERROR`;
        bounceDisplay();
        inputOne = '';
        inputTwo = '';
        operator = '';
        result = '';
        operatorSelected = false;
    } else {
        result = num1 / num2;
        inputOne = result
        display.innerHTML = `${inputOne}`;
        bounceDisplay();
        inputTwo = '';
    }
};

function Operate(operator, num1, num2) {
    if (operator === "+") {
        Add(num1, num2);
    } else if (operator === "-") {
        Subtract(num1, num2);
    } else if (operator === "*") {
        Multiply(num1, num2);
    } else if (operator === "/") {
        Divide(num1, num2);
    }
};

function Display() {
    if (operatorSelected === false) {
        display.innerHTML = `${inputOne}`;
    } else if (operatorSelected === true) {
        display.innerHTML = `${inputTwo}`;
    }
};

function clearDisplay() {
    allclear.addEventListener('click', () => {
        display.innerHTML = '';
        inputOne = '';
        inputTwo = '';
        operator = '';
        result = '';
        operatorSelected = false;
    })
};

function bounceDisplay() {
    display.classList.add('bounce');
    setTimeout(() => {
        display.classList.remove('bounce');
    }, 500);
}

numberKeypad();
operatorKeypad();
getEquals();
clearDisplay();