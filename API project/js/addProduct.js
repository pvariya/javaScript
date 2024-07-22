import productAPI from"../api/ProductAPI.js"
import navbar from "../component/navBar.js";
document.getElementById("navbar").innerHTML=navbar()


const addProduct=(event)=>{
    event.preventDefault()
    let productData = {
        img : document.getElementById("img").value,
        price : document.getElementById("price").value,
        title : document.getElementById("title").value
    }


    productAPI.post(productData)

    alert("added")
}



document.getElementById("addproductFrom").addEventListener("submit",addProduct)