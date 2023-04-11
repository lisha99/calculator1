const display = document.querySelector('.display input');
const buttons = document.querySelectorAll('.buttons button');
let firstNum = '';
let operator = '';
let secondNum = '';
let result = '';

function clear() {
    display.value = '';
    firstNum = '';
    operator = '';
    secondNum = '';
    result = '';
}

function calculate() {
    if (operator === '+') {
        result = parseFloat(firstNum) + parseFloat(secondNum);
