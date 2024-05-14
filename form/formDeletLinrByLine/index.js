studentList = []

const uiMaker = () => {
    document.getElementById("tbody").innerHTML = ""
    studentList.map((purv) => {
        let tr = document.createElement("tr")
        tr.setAttribute('id', 'tr')

        let td1 = document.createElement("td")
        td1.innerHTML = purv.name

        let td2 = document.createElement("td")
        td2.innerHTML = purv.course

        let td3 = document.createElement("td")
        td3.innerHTML = purv.grid

        let btn = document.createElement("button")
        btn.innerHTML = 'DELETE'
        btn.setAttribute('id', 'delete')
        btn.addEventListener("tr", delet)
        tr.append(td1, td2, td3, btn)
        document.getElementById("tbody").append(tr)
    })
}
const delet = (e) => {
    e.preventDefault()
    document.getElementById("tbody").innerHTML=""
    // studentList=[]
    studentList.map((purv)=>{
        document.getElementById("tr").deleteRow(0)
    })
    // for (let index = 0; index < studentList.length; index++) {
    //     document.getElementById("tr").deleteRow(1)
    // }
}
const studentData = (e) => {
    e.preventDefault();
    data = {
        name: document.getElementById("name").value,
        course: document.getElementById("course").value,
        grid: document.getElementById("grid").value,
    }
    studentList.push(data)
    uiMaker()
    delet()
}


document.getElementById("tbody").addEventListener("delet", delet)
document.getElementById("student").addEventListener("submit", studentData)
