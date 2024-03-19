// DOM selectors
let display = document.querySelector('#output p');

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
    
}




let numberBtns = document.querySelectorAll('[type=number]')
let operatorBtns = document.querySelectorAll('[type=operator]')
let clearBtn = document.querySelector('[type=clear]')


// number button click listener
numberBtns.forEach(function (i) {
    i.addEventListener('click', function() {
        if (!isNaN(i.id)) {
            display.innerHTML += `${i.id}`;
            console.log(i.id)
        } else {
            display.innerHTML += `${i.id}`;
            console.log(i.id)
        }
    })
})

// operator button [need to prevent duplicate entry]
operatorBtns.forEach(function (i) {
    i.addEventListener('click', function() {
            display.innerHTML += `${i.id}`;
            console.log(i.id)
        
        
    })
})


// clear display
clearBtn.addEventListener('click', function() {
    display.innerHTML = `${' '}`;
})

