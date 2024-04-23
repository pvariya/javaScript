const nameAge=()=>{
    let name = document.getElementById("name").value
    let age = document.getElementById("age").value

    document.getElementById("name1").innerHTML=`name  :- ${name}`
    document.getElementById("age1").innerHTML= `age   :- ${age}`
}