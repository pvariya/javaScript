import navbar from "../components/navBar.js";
import getValue from "../components/help.js";

document.getElementById("navbarContainer").innerHTML=navbar()


const userData=(e)=>{
  e.preventDefault();
  let user = {
    username : getValue("username"),
    email:getValue("email"),
    passeord:getValue("password")
  }

  localStorage.setItem("user",JSON.stringify("user"))
  localStorage.setItem("login",true)
  window.location.href="/project/index.html"
}
document.getElementById("Userdata").addEventListener("submit",userData)