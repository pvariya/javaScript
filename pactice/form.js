let studentDataSever = []

const uiMaker = () => {
    document.getElementById("display").innerHTML = ""
    for (let i = 0; i < studentDataSever.length; i++) {
        let name = document.createElement("h1")
        let course = document.createElement("h1")
        let grid = document.createElement("h1")

        name.innerHTML = studentDataSever[i].name
        course.innerHTML = studentDataSever[i].course
        grid.innerHTML = studentDataSever[i].grid


        document.getElementById("display").append(name, course, grid)
    }
}

const studentData = (e) => {
    e.preventDefault();
    let data = {
        name: document.getElementById("name").value,
        course: document.getElementById("course").value,
        grid: document.getElementById("grid").value
    }
    studentDataSever.push(data)
    uiMaker()
}

document.getElementById("from").addEventListener("submit", studentData)