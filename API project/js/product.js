import navbar from "../component/navBar.js";
document.getElementById("navbar").innerHTML = navbar();
import productAPI from "../api/ProductAPI.js";

// Cart array to store items
let cart = [];

// Function to update the cart
const addToCart = (item) => {
  cart.push(item);
  localStorage.setItem("item",JSON.stringify(item))
  console.log("Cart:", cart); 
};

// Mapper function to map product data to the DOM
const mapper = (data) => {
  data.forEach((ele) => {
    let img = document.createElement("img");
    img.src = ele.img;

    let price = document.createElement("h3");
    price.innerHTML = ele.price;

    let title = document.createElement("p");
    title.innerHTML = ele.title;

    let buy = document.createElement("button");
    buy.innerHTML = "Buy";
    buy.addEventListener("click", () => addToCart(ele)); 

    let div = document.createElement("div");
    div.append(img, price, title, buy);

    document.getElementById("appenddiv").append(div);
  });
};

// Fetch and map products
let p = await productAPI.get();
mapper(p);
