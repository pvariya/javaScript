
import {login} from "../api/userApi.js";
import navbar from "../component/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

document.getElementById("navbar").innerHTML = navbar();
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    let user =
    {
        username: document.getElementById('email').value,
        password: document.getElementById('password').value,
    };

    login(user);

});
