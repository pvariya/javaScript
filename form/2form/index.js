let studentDataSever = []

const uiMaker = () => {
    document.getElementById("display").innerHTML = ""
    for (let i = 0; i < studentDataSever.length; i++) {
        // creat tag using javaScript
        let name = document.createElement("h1")
        let course = document.createElement("h1")
        let grid = document.createElement("h1")

        // access value 
        name.innerHTML = studentDataSever[i].name
        course.innerHTML = studentDataSever[i].course
        grid.innerHTML = studentDataSever[i].grid

        // display 
        document.getElementById("display").append(name, course, grid)
    }
}

const studentlist = (e) => {
    e.preventDefault();
    let data = {
        name: document.getElementById("name").value,
        course: document.getElementById("course").value,
        grid: document.getElementById("grid").value,
    }
    // console.log(data);
    studentDataSever.push(data)
    console.log(studentDataSever);
    uiMaker();
}

document.getElementById("studentData").addEventListener("submit",studentlist)