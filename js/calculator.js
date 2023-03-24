//create variables for both inputs and buttons
let numOneInput = document.querySelector('#numOne');
let numTwoInput = document.querySelector('#numTwo');
const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divide');
const total = document.querySelector('#result');

// create functions for each button (add,minus,divide and multiply) and add event listener to each one.

function add(n1, n2){
    n1 = Number(numOneInput.value);
    n2 = Number(numTwoInput.value);
    let equals = n1 + n2
    total.innerText = equals
}
plusBtn.addEventListener('click', add)

function minus(n1, n2){
    n1 = Number(numOneInput.value);
    n2 = Number(numTwoInput.value);
    let equals = n1 - n2
    total.innerText = equals
}
minusBtn.addEventListener('click', minus)

function multiply(n1, n2){
    n1 = Number(numOneInput.value);
    n2 = Number(numTwoInput.value);
    let equals = n1 * n2
    total.innerText = equals
}
multiplyBtn.addEventListener('click', multiply)

function divide(n1, n2){
    n1 = Number(numOneInput.value);
    n2 = Number(numTwoInput.value);
    let equals = n1 / n2
    total.innerText = equals
}
divideBtn.addEventListener('click', divide)