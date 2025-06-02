const btnEl = document.getElementById("btn")
const inputEl = document.getElementById("input")
const formEl = document.getElementById("form")

// event type
// const clicked = ()=>{
//     alert("Helloe")
// }

// btnEl.addEventListener("click", ()=>{
//     alert('calback')
// })

// inputEl.addEventListener("input", ()=>{
//     console.log(inputEl.value)
// })

// btnEl.addEventListener("click", display)
// formEl.addEventListener("submit", display)

// function display(event) {
//     console.log(event)
//     event.preventDefault()
//     // console.log(event.parent)
//     // alert("display")
// }


// // classList: add, remove, toggle
// const contentEl = document.getElementById("content")

// contentEl.classList.add("polo")
// contentEl.classList.add("polo2")
// contentEl.classList.remove("polo2")

// contentEl.classList.toggle("polo")















const menuIconBtn = document.getElementById("menu-icon")
const menuItems = document.querySelector(".menu-items")
const notificationEl = document.querySelector(".notification")
const notificationMessageEl = document.querySelector("#notification-message")

const toggleMenu = ()=>{
    menuItems.classList.toggle("show-menu")
}
const showNotfication = (message)=>{
    notificationMessageEl.textContent = message
    notificationEl.classList.toggle("show-notification")
}
menuIconBtn.addEventListener("click", ()=>{
    showNotfication("Welcome to Aliexpress. Start exploring our amazing products.")

    setTimeout(()=>{
        notificationEl.classList.toggle("show-notification")
    }, 1000 * 3)
})

