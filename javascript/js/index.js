const number = document.getElementById("number");


let currentNumber = 0;



function decrease() {
    currentNumber -= 1;
    number.innerText = currentNumber;
}

function reset() {
    currentNumber = 0;
    number.innerText = currentNumber;

}

function increase() {
    currentNumber += 1;
    number.innerText = currentNumber;

}