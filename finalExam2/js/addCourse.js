
import navbar from "../navbar/navbar.js";
document.getElementById("navbar").innerHTML = navbar()
let userdetails = JSON.parse(localStorage.getItem("user"));
    
if (userdetails) {
    document.getElementById("navbar").innerHTML = navbar(userdetails.name, userdetails.Admine_User)
}
else {
    document.getElementById("navbar").innerHTML = navbar()
}