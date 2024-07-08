import navBar from "../components/navBar.js";
import getValue from "../components/help.js";

document.getElementById("navbarContainer").innerHTML = navBar();

let userDetails = JSON.parse(localStorage.getItem("user"));
let isLogin = localStorage.getItem("login") || false;

if (!isLogin) {
  window.location.href = "/project/pages/signUp.html";
}

if (userDetails) {
  document.getElementById("navbarContainer").innerHTML = navBar("logout", userDetails.username);
} 

else {
  document.getElementById("navbarContainer").innerHTML = navBar();
}

let productArray = JSON.parse(localStorage.getItem("productData")) || [];

const productDataHandle = (e) => {
  e.preventDefault();
  let productData = {
    title: getValue("title"),
    price: getValue("price"),
    img: getValue("img"),
    category: getValue("category"),
    id: productArray.length === 0 ? 1 : productArray[productArray.length - 1].id + 1,
  };
  productArray.push(productData);
  localStorage.setItem("productData", JSON.stringify(productArray));
};


document.getElementById("productData").addEventListener("submit", productDataHandle);
