// DOM selectors
let display = document.querySelector('#output p');

let buttons = document.querySelectorAll('button')

const numberBtns = document.querySelectorAll('[type=number]')
const operatorBtns = document.querySelectorAll('[type=operator]')
const clearBtn = document.querySelector('[type=clear]')
const decimalBtn = document.querySelector('[type=decimal]')
const equalsBtn = document.querySelector('[type=equals]')


// buttons.forEach(btn => {
//     btn.addEventListener('click', (e) => {
//     lastClick = e.target.id
//     console.log('button test is ' + e.target.id)
//     console.log('last click is ' + lastClick)
//     console.log(operator + ' is the operator')
//     })
    
// })


// operating variables
let displayValue = 0
let firstOperand = null;
let secondOperand = null;
let operator = null;
let decimal = null;
let result = null;
let lastClick;

function add(a, b) {
    result = a + b
    console.log(result);
    display.innerHTML = result;
    firstOperand = result;

}

function subtract(a, b) {
    result = a - b
    console.log(result);
    display.innerHTML = result;
    firstOperand = result;

}

function multiply(a, b) {
    result = a * b
    console.log(result);
    display.innerHTML = result;
    firstOperand = result;

}

function divide(a, b) {
    result = a / b
    console.log(result);
    display.innerHTML = result;
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
        return divide(firstOperand, secondOperand);
    }

    // display.innerHTML = operate();
}

// function clear(display) {
//     display.innerHTML = `${''}`;
// }







// number button click listener
numberBtns.forEach(function (i) {
    i.addEventListener('click', function() {
        // if (lastClick = operator) {
        //     display.innerHTML = `${''}`;
        // }
        display.innerHTML += `${''}`;
        display.innerHTML += `${i.id}`;
        console.log(i.id)

        

    

    })
})

// operator button [need to prevent duplicate entry]
operatorBtns.forEach(function (i) {
    i.addEventListener('click', function() {
        if (firstOperand === undefined) {
            firstOperand = display.innerHTML  
            operator = `${i.id}`;

        } else {
            secondOperand = display.innerHTML
            operator = `${i.id}`;
        }
        
        console.log("current operator is " + i.id)
        console.log("current firstOperand variable is " + firstOperand)
        console.log("current secondOperand variable is " + secondOperand)
        
        
    })
})


// clear display
clearBtn.addEventListener('click', function() {
    display.innerHTML = `${''}`
    // displayValue = 0
    // firstOperand = null;
    // secondOperand = null;
    // operator = null;
    // decimal = null;
    // result = null;
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
    let equalsArray = display.innerHTML.split(' ')
    console.log(equalsArray)
    secondOperand = '';

})

