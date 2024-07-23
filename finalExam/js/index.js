import navbar from "../component/navbar.js"
document.getElementById("navbar").innerHTML = navbar()








let islogin = localStorage.getItem("isLogin")
if(!islogin){
    window.location.href="/finalExam/html/login.html"
}


let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
const uiMaker = (data) => {
    document.getElementById("food-container").innerHTML = "";
    data.forEach((ele) => {
        let img = document.createElement("img");
        img.src = ele.image;
        img.className = "food-item-image";
        let name = document.createElement("h3");
        name.innerHTML = ele.name;
        name.className = "food-item-name";

        let cuisine = document.createElement("h4");
        cuisine.innerHTML = ele.cuisine;
        cuisine.className = "food-item-cuisine";

        let rating = document.createElement("h3");
        rating.innerHTML = `Rating: ${ele.rating}`;
        rating.className = "food-item-rating";


        let cost = document.createElement("h3")
        cost.innerHTML = `Cost: ${ele.caloriesPerServing}`;

        let orderBtn = document.createElement("button");
        orderBtn.innerHTML = "Order";
        orderBtn.className = "food-item-button";
        orderBtn.addEventListener("click", () => {
            alert(`Ordered: ${ele.name}`);
            cartItems.push(ele); 
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
            window.location.href = "/finalExam/html/cart.html";
        });
        

        let div = document.createElement("div");
        div.className = "food-item";
        div.append(img, name, cuisine, rating, cost, orderBtn);

        document.getElementById("food-container").append(div);
    });
};

const foodApi = async () => {
    let req = await fetch("https://jsonserver-xpeq.onrender.com/Food_Data")
    let res = await req.json()
    console.log(res);

    uiMaker(res)
    return res
}

foodApi()



const fetchFoodItems = async () => {
    try {
        const response = await fetch('https://jsonserver-xpeq.onrender.com/Food_Data');
        if (!response.ok) {
            throw new Error('Failed to fetch food items');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching food items:', error);
        return [];
    }
}

function sortByName(foodItems) {
    return [...foodItems].sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    });
}


function sortByPrice(foodItems) {
    return [...foodItems].sort((a, b) => a.caloriesPerServing - b.caloriesPerServing);
}


function sortByPopularity(foodItems) {
    return [...foodItems].sort((a, b) => b.rating - a.rating);
}


document.getElementById('sortByNameBtn').addEventListener('click', async () => {
    const foodItems = await fetchFoodItems();
    const sortedItems = sortByName(foodItems);
    uiMaker(sortedItems);
});

document.getElementById('sortByPriceBtn').addEventListener('click', async () => {
    const foodItems = await fetchFoodItems();
    const sortedItems = sortByPrice(foodItems);
    uiMaker(sortedItems);
});

document.getElementById('sortByPopularityBtn').addEventListener('click', async () => {
    const foodItems = await fetchFoodItems();
    const sortedItems = sortByPopularity(foodItems);
    uiMaker(sortedItems);
});
  document.getElementById("searchValue").addEventListener('input', async(e)=>{
    e.preventDefault()
        let input = document.getElementById("searchValue").value
        console.log(input);
        let response = await fetch('https://jsonserver-xpeq.onrender.com/Food_Data');
       
        let data = await response.json();
        console.log(data);
        let filter = data.filter(elm=>elm.name.includes(input))
        uiMaker(filter)
})
