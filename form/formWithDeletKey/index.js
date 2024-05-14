studentList=[]

const uiMaker = ()=>{
    document.getElementById("tbody").innerHTML = ""
    studentList.map((purv)=>{
        let tr = document.createElement("tr")
        
        let td1 = document.createElement("td")
        td1.innerHTML = purv.name

        let td2 = document.createElement("td")
        td2.innerHTML = purv.course

        let td3 = document.createElement("td")
        td3.innerHTML = purv.grid

        tr.append(td1, td2, td3)
        document.getElementById("tbody").append(tr)
    })
}

const studentData = (e) => {
    e.preventDefault();
    data={
        name: document.getElementById("name").value,
        course: document.getElementById("course").value,
        grid: document.getElementById("grid").value,
    }
    studentList.push(data)
    uiMaker()
}

const delet=()=>{
    document.getElementById("tbody").innerHTML=""
    studentList=[]
}
document.getElementById("tbody").addEventListener("delet",delet)
document.getElementById("student").addEventListener("submit", studentData)
