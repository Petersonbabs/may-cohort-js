// create a function: displayNum(num) that receives the parameter of the number that was clicked and display it on the input
const inputEl = document.getElementById("input")
let canClear = false

let firstValue;
let secondValue;
let operatorSign;
let operatorClicked = 0

// save the operator that was clicked in a vaiabl => operator

function displayNum(num) {
    if (canClear) {
        inputEl.value = ""
        inputEl.value += num
        canClear = false
    } else {
        inputEl.value += num
    }
}

function operator(sign) {
    // save the first set of numbers in a variable = > firstVal
    operatorSign = sign
    operatorClicked++ // 1, 2
    canClear = true
    if(operatorClicked > 1 && inputEl.value){
        console.log(firstValue, inputEl.value)
        performArithmetic(sign)
    } else{
        firstValue = inputEl.value
    }
}

function performArithmetic(sign){
    console.log(sign)
if(sign === "+"){
    inputEl.value = umberN(firstValue) + Number(inputEl.value)     
}

}

function equalTo() {
    secondValue = inputEl.value

    
    console.log(firstValue, operatorSign, secondValue)
    // log the firstValue, Operator, and the secondValue
}

function clearScreen(){
    // alert()
    inputEl.value = ""
}