import navbar from "../navbar/navbar.js";
document.getElementById("navbar").innerHTML = navbar()
import{createUser,isExists}from"../api/userApi.js"



document.getElementById('signUp').addEventListener('submit', (event) => {
    event.preventDefault();

    const user = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        Admine_User:document.getElementById('Admine_User').value,
        password: document.getElementById('password').value,
    
    };
    localStorage.setItem("user",JSON.stringify(user));
    // console.log(user);
    localStorage.setItem("isLogin",true);
    
    createUser(user);
    isExists(user);
});

