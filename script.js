// DOM selectors
let display = document.querySelector('#output p');


let buttons = document.querySelectorAll('button')

const numberBtns = document.querySelectorAll('[type=number]')
const operatorBtns = document.querySelectorAll('[type=operator]')
const clearBtn = document.querySelector('[type=clear]')
const decimalBtn = document.querySelector('[type=decimal]')
const equalsBtn = document.querySelector('[type=equals]')
const backspaceBtn = document.querySelector('[type=backspace]')


// operating variables
let displayValue = 0
let firstOperand = null;
let secondOperand = null;
let operator = null;
let decimal = null;
let result = null;
let lastClick;

function add(a, b) {
    result = parseInt(a) + parseInt(b)
    console.log(result);
    display.innerHTML = result.toString().slice(0,10);
    firstOperand = result;

}

function subtract(a, b) {
    result = a - b
    console.log(result);
    display.innerHTML = result.toString().slice(0,10);
    firstOperand = result;

}

function multiply(a, b) {
    result = a * b
    console.log(result);
    display.innerHTML = result.toString().slice(0,10);
    firstOperand = result;

}

function divide(a, b) {

    result = a / b
    console.log(result);
    display.innerHTML = result.toString().slice(0,10);
    firstOperand = result;
    
}

function operate(firstOperand, secondOperand, operator) {
    if (operator === '+') {
        return add(firstOperand, secondOperand);
        
    } else if ( operator === '-' ) {
        return subtract(firstOperand, secondOperand);
    } else if ( operator === '*' ) {
        return multiply(firstOperand, secondOperand);
    } else if ( operator === '/' ) {
        if (secondOperand === '0') {
            return alert("DIDN'T YOU LEARN YOU CAN'T DIVIDE BY ZERO IN SCHOOL?!")
            
        }
        return divide(firstOperand, secondOperand);
    }
}



// number button click listener
numberBtns.forEach(function (i) {
    i.addEventListener('click', function() {
        if (display.innerHTML.toString().length >= 10 ) {
            display.innerHTML = display.innerHTML;
        } else if ( display.innerHTML === `${result}` ) {
            display.innerHTML = `${i.id}`;

        } else if (display.innerHTML === '0') {
            display.innerHTML = `${i.id}`;
        
        } else if ( operator !== null && 
            firstOperand !== display.innerHTML && 
            secondOperand !== display.innerHTML ) {
            display.innerHTML += `${i.id}`;
        
        } else if ( operator !== null && firstOperand !== null ) {
            display.innerHTML = `${i.id}`;
            
        }  else if ( display.innerHTML === '0.') {
            display.innerHTML += `${i.id}`;
        
        } else if (display.innerHTML == 0 && i.id == decimal) {
            display.innerHTML += `${i.id}`;
        
        } else {
            display.innerHTML += `${i.id}`;
        }

    })
})

operatorBtns.forEach(function (i) {
    i.addEventListener('click', function() {
        if (firstOperand === null) {
            firstOperand = display.innerHTML  
            operator = `${i.id}`;
        }  else {
            secondOperand = display.innerHTML
            operator = `${i.id}`;


        } 
        
        
        console.log("current operator is " + i.id)
        console.log("current firstOperand variable is " + firstOperand)
        console.log("current secondOperand variable is " + secondOperand)
        console.log("the last click was " + lastClick)
        
    })
})


// clear display
clearBtn.addEventListener('click', function() {
    display.innerHTML = `${'0'}`
    firstOperand = null;
    secondOperand = null;
    operator = null;
    decimal = null;
})

backspaceBtn.addEventListener('click', function() {
    display.innerHTML = display.innerHTML.slice(0,-1)
    if (display.innerHTML === `${''}`) {
        display.innerHTML = `${'0'}`;
    }
})


decimalBtn.addEventListener('click', function() {
    if (display.innerHTML.includes('.') == false) {
    
        display.innerHTML += `${'.'}`;
        decimal = display.innerHTML;
    }
})

equalsBtn.addEventListener('click', function() {
        secondOperand = display.innerHTML
        operate(firstOperand, secondOperand, operator)

        secondOperand = '';
        operator = null;


    

    console.log('the result is ' + result)
})

