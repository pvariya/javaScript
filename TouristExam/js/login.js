import navBar from "../components/navBar.js"
import getValue from "../components/valueget.js"

let userdetails = JSON.parse(localStorage.getItem("user"));
document.getElementById("navbar").innerHTML=navBar()

document.getElementById("Userdata").addEventListener("submit",userdetails=(e)=>{
    e.preventDefault();
    let user ={
        email: getValue("email"),
        password : getValue("password")
    }
    
    if (userdetails) {
        
        if (userdetails.email != user.email) {
            alert("user not found " + user.email);
        }
        else if (userdetails.password != user.password) {
            alert("password mismatch " + user.password);
        }
        else {
            alert("logged in " + user.email);
            document.getElementById("navbar").innerHTML = navBar("logout", userdetails.username)
            
            localStorage.setItem("Login", true)
        }
    }
    else {
        alert("please sign up ")
        window.location.href = "/TouristExam/pages/sign-in.html"
        
    }
})