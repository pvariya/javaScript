import navbar from "../component/navbar.js"
document.getElementById("navbar").innerHTML = navbar()
import{createUser,isExists}from"../api/userApi.js"




const signupForm = document.getElementById('signupForm');

signupForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const user = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        phone: document.getElementById('phone').value,
        city: document.getElementById('city').value
    };
    
    localStorage.setItem("isLogin",true);
    localStorage.setItem("user",JSON.stringify(user));
    console.log(user)
    createUser(user);
    isExists(user);
});

