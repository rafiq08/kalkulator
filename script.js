const calculatorScreen = document.querySelector('.calculator-screen');

const updateScreen = (number) => {
    calculatorScreen.value = number;
}

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        updateScreen(event.target.value)
    })
})

let prevNumber = '0';
let calculationOperator = '';
let currentNumber = '';

const inputNumber = (number) => {
    if (currentNumber === 0) {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    })
});

const operators = document.querySelectorAll(".operator");

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = '0';
}

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    })
});

const equalSign = document.querySelector(".equal-sign");

const calculate = () => {
    let result = '';
    switch (calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = prevNumber - currentNumber;
            break;
        case "*":
            result = prevNumber * currentNumber;
            break;
        case "/":
            result = prevNumber / currentNumber;
            break;
        default:
            return;
    }
    currentNumber = result;
    calculationOperator = '';
}

equalSign.addEventListener('click', () => {
    calculate();
    updateScreen(currentNumber);
})

const clearBtn = document.querySelector(".all-clear");

const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = 0;
}

clearBtn.addEventListener('click', () => {
    clearAll();
    updateScreen(currentNumber);
})

const decimal = document.querySelector(".decimal");

inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
})

const percentage = document.querySelector(".percentage");

const calculatePercentage = () => {
    if (currentNumber === 0) {
        return;
    } else if (!prevNumber) {
        currentNumber = currentNumber / 100;
        updateScreen(currentNumber);
    } else {
        currentNumber = currentNumber / 100;
        updateScreen(currentNumber);
    }
}

percentage.addEventListener('click', (event) => {
    calculatePercentage();
})


