//calculat0r functions
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function calculate(num1, num2, func) {
    return func(num1, num2);
};

//send back to DOM
function printResult(v) {
    document.getElementById("output").innerHTML = v;
}

///selected calculation w/ numbers + print
function calcPrint(f) {
    let num1input = document.getElementById("num1").value;
    let num2input = document.getElementById("num2").value;
    let total = calculate(+num1input, +num2input, f);
    printResult(total);
}

//call + send 
document.getElementById("add").addEventListener("click", function () {
    calcPrint(add);
});

document.getElementById("subtract").addEventListener("click", function () {
    calcPrint(subtract);
});

document.getElementById("multiply").addEventListener("click", function () {
    calcPrint(multiply);
});

document.getElementById("divide").addEventListener("click", function () {
    calcPrint(divide);
});