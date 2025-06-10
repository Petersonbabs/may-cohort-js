// Object-Oriented Programming (OOP) in JavaScript is a programming paradigm that revolves around organizing code into objects. These objects encapsulate both data (properties) and behavior (methods). OOP aims to enhance code modularity, reusability, and maintainability. 

// Objects: Fundamental building blocks that represent entities with data and actions.
// Classes: (Introduced in ES6) Provide a blueprint for creating objects. 

class User {
    // constructor = fields/properties
    constructor(name, age, gender){
        this.name = name
        this.age = age
        this.gender = gender
    }

    // METHODS
    login(userId){
        console.log(`${this.name} is logging in...`)
    }

    logout(){
        console.log("logging out...")
    }
}

class Admin extends User {
    constructor(name, age, gender, adminToken){
        super(name, age, gender)
        this.adminToken = adminToken
    }


    deleteUser(){
        console.log("Delete a user")
    }
}


const person  = new User("james", 14, "female")
const person2  = new User("james anshshsh", 14, "female")
person2.login()

const admin = new Admin("Joe", 67, "male", "0982t7gjkdhvjnm")
console.log(admin)
admin.login()
admin.logout(   )
admin.deleteUser()














// const admin = new Admin("Boss", 14, "male", "0908g3uvybjhk")
// console.log(admin)



class TodoItem {
    constructor(task, time){
        this.task = task
        this.time = time
    }
}

const inputEl = document.getElementById("todo-input")
const btnEl = document.getElementById("add-btn")
const todoItemsEl = document.getElementById("todo-items")
let tasks = []

const addTodo = ()=>{
    const dt = new Date()
    // retrieve the task from te input
    const task = inputEl.value
    // create a todoitem instance containing the task and time
    const newTodo = new TodoItem(task, dt.toTimeString())
    // add it to an array
    tasks.push(newTodo)
    // render it
    todoItemsEl.innerHTML = ""
    tasks.forEach(ele => {
        todoItemsEl.innerHTML += `
            <li>
                <p>${ele.task}</p>
                <p>${ele.time}</p>
            </li>
        `
    })
}

btnEl.addEventListener("click", addTodo)