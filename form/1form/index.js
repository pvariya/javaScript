let studentlist = []

const htmlprint = () => {
    document.getElementById("display").innerHTML=""
    for (let i = 0; i < studentlist.length; i++) {
        // creat tag using javaScript
        let name = document.createElement("h1")
        let course = document.createElement("h1")
        let grId = document.createElement("h1")

        // access value
        name.innerHTML = studentlist[i].name
        course.innerHTML = studentlist[i].course
        grId.innerHTML = studentlist[i].grId

        //display in html 
        document.getElementById("display").append(name,course,grId)
    }
}

const studentData = (e) => {
    e.preventDefault();
        
    let data = {
        name: document.getElementById("name").value,
        course: document.getElementById("course").value,
        grId: document.getElementById("grId").value,
    }
    // console.log(data);
    studentlist.push(data)
    console.log(studentlist);
    htmlprint();
}

document.getElementById("studentData").addEventListener("submit", studentData)