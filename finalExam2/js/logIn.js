import navbar from "../navbar/navbar.js";
document.getElementById("navbar").innerHTML = navbar()

import { login } from "../api/userApi.js"
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
