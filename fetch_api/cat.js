const catImageContainer = document.querySelector(".cat-con")
const catFormEl = document.getElementById("cat-form")
const statusCodeInput = document.getElementById("status-code-input")

// FUNCTION: genearet

const generateCatImage = async (e) => {
    e.preventDefault()
    console.log("generating...")
    const statusCode = statusCodeInput.value
    try {
        // const res = await fetch(`https://http.cat/${statusCode}`)
        // const data = await res.json()
        // console.log(data)

        // const img = document.createElement("img")
        // img.src = `https://http.cat/${statusCode}`
        catImageContainer.innerHTML = `<img src="https://http.cat/${statusCode}" width="300"/>`

    } catch (error) {
        console.log(error)
    } finally{
        console.log("DONE")
    }
}

catFormEl.addEventListener("submit", generateCatImage)

