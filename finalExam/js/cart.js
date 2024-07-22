import navbar from "../component/navbar.js"
document.getElementById("navbar").innerHTML = navbar()




function displayCartItems() {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    let cartContainer = document.getElementById("cartItems");
    cartContainer.innerHTML = ""; 

    cartItems.forEach((item) => {
        
        let cartItemRow = document.createElement("tr");

        let image = document.createElement("td");
        let img = document.createElement("img");
        img.src = item.image;
        img.alt = item.name; 
        img.className = "item-image";
        image.appendChild(img);

        let calories = document.createElement("td");
        calories.textContent = item.caloriesPerServing;
        calories.className = "item-price"; 

        let rating = document.createElement("td");
        rating.textContent = item.rating;
        rating.className = "item-rating"; 
        let btn1 = document.createElement("button");
        btn1.innerHTML = "-"
        let btn2 = document.createElement("button");

        

        let btn3 = document.createElement("button");
        btn3.innerHTML = "+"
        btn1.addEventListener("click", () => handleQty(i, "-"))
        btn3.addEventListener("click", () => handleQty(i, "+"))
        



        cartItemRow.append(image,calories,rating);
    
        cartContainer.append(cartItemRow);
    });
}


displayCartItems();



