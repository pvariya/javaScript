import navBar from "../component/navBar.js";
document.getElementById("navbar").innerHTML = navBar();

import { creatUser, getUser, upadteUser } from "../api/api.js";
let id = -1;
const handalSingInData = (e) => {
  e.preventDefault();
  let user = {
    username: document.getElementById("username").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };
  if (id == -1) {
    creatUser(user);
  } else {
    alert("update user");
    upadteUser(id, user);
  }
};

let data = await getUser();
document
  .getElementById("singInFromData")
  .addEventListener("submit", handalSingInData);
