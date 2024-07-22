import navbar from "../component/navbar.js"
document.getElementById("navbar").innerHTML = navbar()





const signupForm = document.getElementById('signupForm');
const signupMessage = document.getElementById('signupMessage');
let id = -1
signupForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const userData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        phone: document.getElementById('phone').value,
        city: document.getElementById('city').value
    };
    if (id == -1) {

        fetch('https://jsonserver-xpeq.onrender.com/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
            .then(response => response.json())
            .then(data => {
                signupMessage.textContent = 'User signed up successfully!';
                console.log('Success:', data);
                window.location.href = "/finalExam/index.html"

            })
            .catch((error) => {
                console.error('Error:', error);
                signupMessage.textContent = 'Error signing up. Please try again.';
            });
    } else {
        alert("user already exists")
    }

});

