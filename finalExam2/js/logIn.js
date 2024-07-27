import navbar  from"../api/navbar.js"
document.getElementById("navbar").innerHTML=navbar()



document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const response = await fetch(
    `http://localhost:3000/users?username=${username}&password=${password}`
  );
  const users = await response.json();

  if (users.length > 0) {
    localStorage.setItem("loggedInUser", JSON.stringify(users[0]));
    window.location.href = "/FinalExam2/index.html";
  } else {
    alert("User not found. Please sign up.");
    window.location.href = "/FinalExam2/html/singUp.html";
  }
});
