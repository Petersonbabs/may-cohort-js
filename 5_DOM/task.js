// const boxEl = document.getElementById("box")
// const circleEl = document.getElementById("circle")
// const chosenElement = prompt("Box or Circle?")
// let size;
// let bgColor;
// let radius;


// if (chosenElement.toLocaleLowerCase() === "box") {

//     size = prompt("What should be the size")
//     bgColor = prompt("What about the color")
//     boxEl.style.height = `${size}px`
//     boxEl.style.width = `${size}px`
//     boxEl.style.background = bgColor

// } else if (chosenElement.toLocaleLowerCase() === "circle") {
//     size = prompt("What should be the size")
//     bgColor = prompt("What about the color")
//     radius = prompt("How rounded so you want it (in %)")

//     circleEl.style.width = `${size}px`
//     circleEl.style.height = `${size}px`
//     circleEl.style.borderRadius = `${radius}%`
//     circleEl.style.backgroundColor = bgColor
// } else {
//     alert("You chose wrong option")
// }

const userNameEl = document.getElementById("userName")
const userName = prompt("What can we call you?")
userNameEl.textContent = userName
const computerNum = Math.floor(Math.random() * 10)
const playerNum = prompt("Guess a number between 0 - 10")
const scoreEl = document.getElementById("score")
let score = 5

if (computerNum > playerNum) {
    alert("YOu lose. Computer guessed " + computerNum)
    score--
    scoreEl.textContent = score
    // update the score text content
    
} else if (playerNum > computerNum) {
    alert("YOu won. Computer guessed " + computerNum)
    score++
    // update the score text content
    scoreEl.textContent = score
}