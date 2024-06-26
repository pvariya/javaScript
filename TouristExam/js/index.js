import navBar from "../components/navBar.js"
let userdetails = JSON.parse(localStorage.getItem("user"));
let Login = localStorage.getItem("Login") || false;
if (!Login) {
    window.location.href = "/TouristExam/pages/sign-in.html"
}

if (userdetails) {
    document.getElementById("navbar").innerHTML = navBar("logout", userdetails.username)
}
else {
    document.getElementById("navbar").innerHTML = navBar()
}
// document.getElementById("navbar").innerHTML = navBar()