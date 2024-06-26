import navBar from "../components/navBar.js"
import getValue from "../components/valueget.js"

document.getElementById('Userdata').addEventListener('submit',(e)=>{
  e.preventDefault();
  let user = {
    username : getValue("username"),
    email : getValue("email"),
    password : getValue("password")   
  }

  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem('Login', true);
  window.location.href = "/TouristExam"; 
  console.log(user); 
});
document.getElementById("navbar").innerHTML=navBar()