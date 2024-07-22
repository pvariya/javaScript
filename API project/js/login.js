import navbar from "../component/navBar.js";
document.getElementById("navbar").innerHTML = navbar();


document.getElementById("loginFrom").addEventListener("submit", (e) => {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
})