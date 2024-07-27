import navbar  from"../api/navbar.js"
document.getElementById("navbar").innerHTML=navbar()

document.getElementById("signupForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  let newUsername = document.getElementById("newUsername").value
  let newPassword = document.getElementById("newPassword").value
  let role=document.getElementById("role").value


  const checkResponse = await fetch(
    `http://localhost:3000/users?username=${newUsername}`
  );
  const existingUsersText = await checkResponse.text();
  const existingUsers = JSON.parse(existingUsersText);

  if (existingUsers.length > 0) {
    alert("User already exists. Please log in.");
    window.location.href = "/FinalExam2/html/login.html";
    return;
  }

  const response = await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({username: newUsername, password: newPassword , role: role}),
  });

  const responseText = await response.text();

  if (responseText.includes("id")) {
    alert("Signup successful! You can now log in.");
    window.location.href = "/FinalExam2/html/login.html";
  } else {
    alert("Signup failed. Please try again.");
  }
});
