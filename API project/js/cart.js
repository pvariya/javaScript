// cart.js
import navbar from "../component/navBar.js";
document.getElementById("navbar").innerHTML = navbar();

// Function to get cart items from local storage
const getCartItems = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
};

// Function to render cart items
const renderCartItems = () => {
  const cartItems = getCartItems();
  const cartContainer = document.getElementById("cartItems");

  if (cartItems.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cartItems.forEach((item) => {
    let img = document.createElement("img");
    img.src = item.img;

    let price = document.createElement("h3");
    price.innerHTML = item.price;

    let title = document.createElement("p");
    title.innerHTML = item.title;

    let remove = document.createElement("button");
    remove.innerHTML = "Remove";
    remove.addEventListener("click", () => removeFromCart(item));

    let div = document.createElement("div");
    div.append(img, price, title, remove);

    cartContainer.append(div);
  });
};

// Function to remove item from cart
const removeFromCart = (itemToRemove) => {
  let cartItems = getCartItems();
  cartItems = cartItems.filter(item => item.id !== itemToRemove.id);
  localStorage.setItem("cart", JSON.stringify(cartItems));
  renderCartItems();
};

// Initial render of cart items
renderCartItems();
