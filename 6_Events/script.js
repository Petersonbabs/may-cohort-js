// COMMONS EVENTS TYPES

// MOUSE EVENT: click, dbclick, mouseover, mouseout
// KEYBOARD EVENT: keydown, keyup, keypress
// FORM EVENTS: submit, change, focus, blur
// WINDOW EVENTS: load, resize, scroll

// function buttonClick(){
//     alert("Button clicked")
// }
// function buttonDoubleClick(){
//     alert("Button double clicked")
// }
// function buttonMOuseOver(){
//     alert("Button mouse over")
// }
// function buttonMOuseOut(){
//     alert("Button mouse out")
// }


const inputEl = document.getElementById("text")

function trackText(){
    console.log(inputEl.value)
    if(inputEl.value.toLowerCase() === "sex"){
        inputEl.value = "gender"
    }
}

const nameInputEl = document.getElementById("name-input")
const phoneInputEl = document.getElementById("phone-input")
const nameParagrahEl = document.getElementById("name-el")
const phoneParagrahEl = document.getElementById("phone-el")



function display(e){
  
    console.log(nameInputEl, phoneInputEl)
    const name = nameInputEl.value
    const phone = phoneInputEl.value

    nameParagrahEl.textContent = name
    phoneParagrahEl.textContent = phone
}