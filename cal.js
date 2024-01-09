
let btn = document.getElementById("btnCal");
let result = document.getElementById("answer");
let finalresult;
let numOneError = document.getElementById("num1Error");
let numTwoError = document.getElementById("num2Error");
let operatorError = document.getElementById("operatorError");
let numOneStatus,
    numTwoStatus,
    operatorStatus = true;

numOneError.style.display = "none";
numTwoError.style.display = "none";
operatorError.style.display = "none";

btn.addEventListener("click", function () {
    let num1 = document.getElementById("firstNumber");
    let num2 = document.getElementById("secondNumber");
    let operator = document.getElementById("operation");

    checkvalid(num1, num2, operator);
    if (numOneStatus == true &&
        numTwoStatus == true &&
        operatorStatus == true) {
        num1 = parseInt(num1.value);
        num2 = parseInt(num2.value);
    
    switch (operator.value) {
    case 'plus':
        finalresult = num1 + num2;
        break;
    case 'sub':
        finalresult = num1 - num2;
        break;
    case 'mult':
        finalresult = num1 * num2;
        break;
    case 'div':
        finalresult = num1 / num2;
        break;
    case 'default':
        console.log("error");
        break;
    }
    result.innerHTML = finalresult;
        }
});

function checkvalid(num1,num2,operator) {
    if (num1.value == "" || num1.value == null || num1.value == undefined) {
        numOneError.style.display = "block";
        numOneStatus = false;
    }
    else {
        numOneError.style.display = "none";
        numOneStatus = true;
    }

    if (num2.value == "" || num2.value == null || num2.value == undefined) {
        numTwoError.style.display = "block";
        numTwoStatus = false;
    }
    else {
        numTwoError.style.display = "none";
        numTwoStatus = true;
    }

    if (operator.value == "empty") {
        operatorError.style.display = "block";
        operatorStatus = false;
    }
    else {
        operatorError.style.display = "none";
        operatorStatus = true;
    }

};