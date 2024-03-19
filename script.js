// DOM selectors
let display = document.getElementById('output');

// vars
let numberA;
let numberB;
let operator;



function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, operator) {


}

function clear() {
    display.innerHTML = `${''}`;
}


let btns = document.querySelectorAll("button")
btns.forEach(function (i) {
    i.addEventListener('click', function() {
        if (!isNaN(i.id)) {
            display.innerHTML = `${i.id}`;
            console.log(i.id)
        } else if (i.id === 'clear') {
            display.innerHTML = `${''}`;
        } else {
            display.innerHTML = `${i.id}`;
            console.log(i.id)
        }
    })
})



