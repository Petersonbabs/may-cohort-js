// 1. Mutator Methods (Change the original array)
// 2. Accessor Methods (Do NOT change the original array)   
// 3. Iteration Methods
// 4. Utility/Static Methods

const products = [
    {title: "Nike shoe", price: 400, id: 1},
    // {title: "IPhone 16", price: 8000, id: 2},
    // {title: "IPhone 16", price: 600, id: 2},
    // {title: "IPhone 14", price: 600, id: 2},
    {title: "Gucci bag", price: 250, id: 3},
    {title: "Laptop", price: 150, id: 4}
]

// ITERATION METHODS
// forEach(fn) - Run function for each item
// - map(fn) - Create new array by mapping
// - filter(fn) - Filter items that match condition

// MAP
// const prices = products.map((ele, index) => {
//     console.log("e.price")
// })

// FILTER

// const searchWord = "ap"
// const searchResult = products.filter((ele, index) => (ele.title.includes(searchWord)))
// const cheapProducts = products.filter((ele, index) => (ele.price > 300))
// console.log(cheapProducts)

// FIND
const singleProduct = products.find((ele, index)=>(ele.id == 2))

let usedAirtimes = ["0987654rty289765r"]

console.log(!singleProduct ? "No result" : singleProduct)





















// MUTATOR METHODS
// push(item) - Add to end
// - pop() - Remove from end
// - shift() - Remove from beginning
// - unshift(item) - Add to beginning
// - splice(start, deleteCount, ...items) - Add/Remove at index

// ACCESSOR METHODS
// - concat() - Merge arrays
// - includes(item) - Check if item exists
// - indexOf(item) - First index of item
// - lastIndexOf(item) - Last index of item
// - join(separator) - Join into string
// - find(fn) - First match

















// const products = [
//     {title: "Nike shoe", price: 400},
//     {title: "IPhone 14", price: 600},
//     {title: "Gucci bag", price: 250},
//     {title: "Laptop", price: 150}
// ]

//  const productsEl = document.getElementById("products")

//  products.forEach((ele, index)=>{
//     productsEl.innerHTML += `
//         <div>
//             <h2>${ele.title}</h2>
//             <p>${ele.price}</p>
//             <button>${ele.price > 300 ? "Costly" : "Normal price"}</button>
//         </div>
//     `
//  })


// const greetUserEl = document.getElementById("greet-user")
// const isLoggedIn = false
// greetUserEl.textContent = isLoggedIn ? "Welcome, peter" : "Kindly log in"

// const num = 9
// if(num > 4){
//     console.log("Yes it is!")
// }

// condition ? instruction : alternative-instruction 
// num < 4 ? console.log("Yes, it is!") : console.log("No, it is not!")