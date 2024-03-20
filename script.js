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

function operate(a, b) {

}

function clear() {
    
}




let numberBtns = document.querySelectorAll('[type=number]')
let operatorBtns = document.querySelectorAll('[type=operator]')
let clearBtn = document.querySelector('[type=clear]')
let decimalBtn = document.querySelector('[type=decimal]')
let equalsBtn = document.querySelector('[type=equals]')


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
    display.innerHTML = `${''}`;
})

decimalBtn.addEventListener('click', function() {
    display.innerHTML += `${'.'}`
})

equalsBtn.addEventListener('click', function() {
    let equalsArray = display.innerHTML.split(' ')
    console.log(equalsArray)
    console.log('TEST')


})

