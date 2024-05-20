studentList = []
let salary_Sum = 0;

const deletData = (i,monthlySalary) => {
    studentList.splice(i, 1)
    salary_Sum-=monthlySalary
    uiMaker()
}
const uiMaker = () => {
    document.getElementById("tbody").innerHTML = ""
    studentList.map((ele, i) => {
        let tr = document.createElement("tr")

        let td1 = document.createElement("td")
        td1.innerHTML = ele.name

        let td2 = document.createElement("td")
        td2.innerHTML = ele.jobRoal

        let td3 = document.createElement("td")
        td3.innerHTML = ele.jobDepartment

        let td4 = document.createElement("td")
        td4.innerHTML = ele.monthlySalary
       

        let td5 = document.createElement("td")
        td5.innerHTML = ele.preWorkExperienceInYear

        let td6 = document.createElement("td")
        td6.innerHTML = ele.contactEmailId

        let td7 = document.createElement("td")
        if(ele.preWorkExperienceInYear == Number("")) {
            td7.innerHTML = "FRESHER"
        }   
        else if (ele.preWorkExperienceInYear <= 5) {
            td7.innerHTML = "junior"
        }
        else {
            td7.innerHTML = "senior"
        }

        let td8 = document.createElement("td")
        td8.innerHTML = "Delete"
        td8.addEventListener("click", () => deletData(i, ele.monthlySalary))
        td6.setAttribute("id", "deleteItem")
        td8.style.backgroundColor = "red"

        tr.append(td1, td2, td3, td4, td5, td6, td7, td8)
        document.getElementById("tbody").append(tr)


    })
    document.getElementById("CountSlry").innerHTML = `total Salary : ${salary_Sum}`
    document.getElementById("countEmp").innerHTML = `Total Hired Employee : ${studentList.length}`;
}

const studentData = (e) => {
    e.preventDefault();
    let data = {
        name: document.getElementById("name").value,
        jobRoal: document.getElementById("jobRoal").value,
        jobDepartment: document.getElementById("jobDepartment").value,
        monthlySalary: document.getElementById("monthlySalary").value,
        preWorkExperienceInYear: document.getElementById("preWorkExperienceInYear").value,
        contactEmailId: document.getElementById("contactEmailId").value
    }

    studentList.push(data)

    salary_Sum+=Number(data.monthlySalary)

    uiMaker()
}
const deleteAllData = () => {   
    document.getElementById("tbody").innerHTML = ""
    studentList = []
    let p = 0
    p = document.getElementById("countEmp").innerHTML = `Total Hired Employee : ${studentList.length}`
}
document.getElementById("dataDelet").addEventListener("click", deleteAllData)
document.getElementById("btn").addEventListener("click", studentData)