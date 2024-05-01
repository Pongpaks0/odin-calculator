let num1 = "";
let num2 = "";
let numPrev = "";
let operator = "";
let num1Selected = true;

const nums = document.querySelectorAll(".number");
nums.forEach(ele => {
    ele.addEventListener("click", (e) => {
        if (num1Selected) {
            num1 = num1 + e.target.textContent;
        }
        else {
            num2 = num2 + e.target.textContent;
        }
        updateDisplay(numPrev = num1Selected ? num1 : num2)
    })
})

const clearOp = document.querySelector(".operator#clear");
clearOp.addEventListener("click", () => {
    num1 = "";
    num2 = "";
    numPrev = ""
    operator = ""
    num1Selected = true;
    updateDisplay("")
})

const evalOp = document.querySelector(".operator#evaluate");
evalOp.addEventListener("click", () => {
    if (num2.length > 0 && operator.length > 0) {
        let result = operate(parseInt(num1), parseInt(num2), operator);
        updateDisplay(result);
        num1 = `${result}`;
        num2 = "";
        num1Selected = true;
    } else if (num2.length == 0 && operator.length > 0) {
        let result = operate(parseInt(num1), parseInt(numPrev), operator);
        updateDisplay(result)
        num1 = `${result}`
        num1Selected = false;
    }
})

const mathButtons = document.querySelectorAll(".operator.math")
mathButtons.forEach(ele => {
    ele.addEventListener("click", (e) => {
        if (num2.length > 0) {
            num1 = String(operate(parseInt(num1), parseInt(num2), operator));
            updateDisplay(num1);
            num2 = ""
            operator = e.target.textContent;
            num1Selected = false;
        } else {
            operator = e.target.textContent
            num1Selected = !num1Selected
            updateDisplay("")
        }

    })
})

//---------------------------------------------------------------

function updateDisplay(num) {
    const displayDiv = document.querySelector("#display")
    displayDiv.textContent = num
}

function operate(num1, num2, operator) {
    switch (operator) {
        case "+": return num1 + num2
        case "-": return num1 - num2;
        case "*": return num1 * num2;
        case "/": return num1 / num2;
    }
}