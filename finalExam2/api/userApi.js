
export const createUser = async (user) => {
    if (await isExists(user.email)) {
        alert("User already exist!");
        window.location.href = "/finalExam2/html/logIn.html?";
    }
    else {
        fetch(`https://filanexamjsonserver.onrender.com/FinalExam_User`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user)

            })
        alert('User added successfully!')
        window.location.href = "/finalExam2/html/logIn.html";

    }
}


export const isExists = async (email) => {

    let req = await fetch(`https://filanexamjsonserver.onrender.com/FinalExam_User?email=${email}`)
    let res = await req.json()

    if (res.length > 0) {
        return true
    }
    else (false)
}

export const getUser = async () => {
    let req = await fetch(`https://filanexamjsonserver.onrender.com/FinalExam_User`)
    let res = await req.json()
    return res
}



const addCourse = async (event) => {
    event.preventDefault();

  
        
        let res = await fetch('https://filanexamjsonserver.onrender.com/FinalExam_User');
      
        let data = await res.json();

       
        let lastIndex = data.length - 1;
        if (data[lastIndex].role === "admin") {
           
            window.location.href = "/finalExam2/html/Addcourse.html";
        } else {
           
            alert("Only admin can add courses");
        }

   
}

vent
document.getElementById("addCourseForm").addEventListener('submit', addCourse);






