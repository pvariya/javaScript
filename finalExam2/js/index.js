import navbar  from"../api/navbar.js"
document.getElementById("navbar").innerHTML=navbar()


let user = localStorage.getItem("loggedInUser");
document.addEventListener("DOMContentLoaded", () => {
  if (!user) {
    window.location.href = "/FinalExam2/html/login.html";
  }
}); 

document.getElementById("navbar").innerHTML= navbar(user.username)   

const CouseApi = async () => {
    let req = await fetch("http://localhost:3000/courses")
    let res = await req.json()
    uiMaker(res);
  return await res;
}

CouseApi()

const uiMaker = (data) => {
    document.getElementById("courseContainer").innerHTML = ""
    data.map((ele) => {
        let name = document.createElement("h3")
        name.innerHTML = ele.name

        let image = document.createElement("img")
        image.src = ele.image

        let price = document.createElement("h3")
        price.innerHTML = `Price : ${ele.price}`


        let category = document.createElement("h4")
        category.innerHTML = `seats:${ele.seats}`

        let description = document.createElement("p")
        description.inertia = ele.duration

        let div = document.createElement("div")
        div.append(name, image, price, category, description)

        document.getElementById("courseContainer").append(div)
    })
}


const fetchFoodItems = async () => {
    try {
        const response = await fetch('http://localhost:3000/courses');
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
    return [...foodItems].sort((a, b) => a.actual_price_usd - b.actual_price_usd);
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




document.getElementById("searchValue").addEventListener('input', async (e) => {
    e.preventDefault()
    let input = document.getElementById("searchValue").value
    console.log(input);
    let response = await fetch('http://localhost:3000/courses');

    let data = await response.json();
    console.log(data);
    let filter = data.filter(elm => elm.name.includes(input))
    uiMaker(filter)
})




const addCourse = async(event) => {
event.preventDefault()
    let res = await fetch('https://filanexamjsonserver-1.onrender.com/users')
    let data = await res.json()
    let index =  data.length-1
    console.log(data[index].role,data);
    if (data[index].role == "admin") {
        window.location.href = "/FinalExam2/html/Dashboard.html"
    }
    else {  
        alert("Only admin can add course")
    }
}
document.getElementById("addCourseForm").addEventListener('submit', addCourse)



