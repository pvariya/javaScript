import navbar from "../components/navBar.js"; 

// let userdetails = JSON.parse(localStorage.getItem("user"));
// let isLogin = localStorage.getItem("isLogin") || false;
// if (!isLogin) {
//     window.location.href = "/project/pages/signUp.html"
// }


// if (userdetails) {
//     document.getElementById("navbar").innerHTML = navbar("logout", userdetails.username)
// }
// else {
//     document.getElementById("navbar").innerHTML = navbar()
// }
document.getElementById("navbarContainer").innerHTML = navbar()