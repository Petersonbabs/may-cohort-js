// API = Application Programming INterface
// FETCH
// ASYNCHRONOUS / SYNCHRONOUS
// REQUEST / RESPONSE
// PROMISE


// REQUEST 5
// Request url
// Request Method: GET, POST, PUT=update, PATCH=update, DELETE
// Request body: 
// Request headers

// line one
// line two: a function that made network request
// line three:
// line four:


// synchronous / asynchronous
// async / await
// try / catch / finally
// 
// baseUrl = jumia.com / endpoint = /fashion , /fashion/male

// async function getPosts(){
//     try {
//         const response = await fetch()
//              sgvdjj
//              sgvdjj
//              sgvdjj
//              sgvdjj
//     } catch(error) {
//  console.log(error)
//     } finally {
//  
// }
// }


// url, method
// fetch(requestUrl, {options})




// async function  getPosts(){
//     try {

//         const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//             method: "GET"
//         })
//         const data = await response.json()
//         console.log(data)

//     } catch (error) {
//         console.log(error)
//     }
// }

// getPosts()





// const post = {
//     title: "Welcome to our website",
//     description: "iwuibvsjhbjks"
// }

// async function addPost(){
//     console.log("loading...")
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//             method: "POST",
//             body: JSON.stringify(post)
//         })
//     } catch (error) {

//     } finally {
//         console.log("Stop loading")
//     }
// }



const baseUrl = "https://fakestoreapi.com"
const productsEl = document.querySelector(".products-container")


// GET ALL PRODUCTS
// const getAllProducts = async () => {
//     console.log("loading...")
//     try {
//         const response = await fetch(`${baseUrl}/products`)
//         const data = await response.json()
//         data.forEach((ele, index) => {
//             productsEl.innerHTML += `
//                 <div>
//                     <img src="${ele.image}" width="200"/>
//                     <h2>${ele.title}</h2>
//                     <span>${ele.category}</span>
//                     <p>$${ele.price}</p>
//                 </div>
//             `
//         })
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     } finally {
//         console.log("DOne!")
//     }
// }

// getAllProducts()

const product  = {
    id: 4,
    title: "Nike shoe",
    description: "This is a Nike shoe",
    price: 400,
    category: "men fashion",
    image: "https://i.ebayimg.com/images/g/LksAAOSwsO9mjdyj/s-l960.webp"
}

const addProduct = async ()=>{
    console.log("Adding product...")
    try {
        const response = await fetch(`${baseUrl}/products`, {
            method: "POST",
            body: JSON.stringify(product)
        })
        const data = await response.json()
        console.log(response)
        console.log(data)
    } catch (error) {
        console.log(error)
    } finally{
        console.log("DONE!")
    }
}


addProduct()


const getSingleProduct = async  (id)=>{
    console.log("Getting single product...")
    try {
        const res = await fetch(`${baseUrl}/products/${id}`)
        const data = await res.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }finally{
        console.log("DONE")
    }

}

getSingleProduct(6)