import navBar from "../components/navBar.js"
document.getElementById("navbarContainer").innerHTML=navBar()
import getValue from "../components/help.js"

let product = JSON.parse(localStorage.getItem("productArry")) || []

const uimaker =(data)=>{
    document.getElementById("productList").innerHTML=""
    data.map((ele)=>{
        let img = document.createElement("img")
        img.src = ele.img

        let title = document.createElement("h3")
        title.innerHTML= ele.title

        let price = document.createElement("p")
        price.innerHTML =ele.price
        
        let category = document.createElement("p")
        category.innerHTML = ele.category

        let buyBtn = document.createElement('button')
        buyBtn.innerHTML="buy"

        let div = document.createElement("div")
        div.append(img,title,price,category,buyBtn)
        document.getElementById("productList").append(div)
    })
}