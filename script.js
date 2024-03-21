// DOM selectors
let display = document.querySelector('#output p');

let numberBtns = document.querySelectorAll('[type=number]')
let operandBtns = document.querySelectorAll('[type=operand]')
let clearBtn = document.querySelector('[type=clear]')
let decimalBtn = document.querySelector('[type=decimal]')
let equalsBtn = document.querySelector('[type=equals]')

// operating variables
let prevNum;
let nextNum;
let operand;
let decimal;
let result;


function add(a, b) {
    result = a + b
    console.log(result);
    display.innerHTML = result;
    prevNum = result;

}

function subtract(a, b) {
    result = a - b
    console.log(result);
    display.innerHTML = result;
    prevNum = result;

}

function multiply(a, b) {
    result = a * b
    console.log(result);
    display.innerHTML = result;
    prevNum = result;

}

function divide(a, b) {
    result = a / b
    console.log(result);
    display.innerHTML = result;
    prevNum = result;
}

function operate(prevNum, nextNum, operand) {
    if (operand === '+') {
        return add(prevNum, nextNum);
        
    } else if ( operand === '-' ) {
        return subtract(prevNum, nextNum);
    } else if ( operand === '*' ) {
        return multiply(prevNum, nextNum);
    } else if ( operand === '/' ) {
        return divide(prevNum, nextNum);
    }

    // display.innerHTML = operate();
}

// function clear(display) {
//     display.innerHTML = `${''}`;
// }







// number button click listener
numberBtns.forEach(function (i) {
    i.addEventListener('click', function() {
            display.innerHTML += `${i.id}`;
            console.log(i.id)

    

    })
})

// operator button [need to prevent duplicate entry]
operandBtns.forEach(function (i) {
    i.addEventListener('click', function() {
        if (prevNum === undefined) {
            prevNum =  display.innerHTML  
            operand = `${i.id}`;

        } else {
            nextNum =  display.innerHTML
            operand = `${i.id}`;
        }
        
        console.log("current operand is " + i.id)
        console.log("current prevNum variable is " + prevNum)
        console.log("current nextNum variable is " + nextNum)
        
        
    })
})


// clear display
clearBtn.addEventListener('click', function() {
    display.innerHTML = `${''}`;
})

decimalBtn.addEventListener('click', function() {
    if (display.innerHTML.includes('.') == false) {
    
        display.innerHTML += `${'.'}`;
        decimal = display.innerHTML;
    }
})

equalsBtn.addEventListener('click', function() {
    nextNum =  display.innerHTML
    operate(prevNum, nextNum, operand)
    let equalsArray = display.innerHTML.split(' ')
    console.log(equalsArray)


})

