let dataArray= JSON.parse(localStorage.getItem("dataArray"))||[]


const handalData=(e)=>{
    e.preventdefault();
    let data ={
        name : document.getElementById("name").value,
        img : document.getElementById("img").value,
        price : document.getElementById("price").value,
        catagory : document.getElementById("catagory").value,
    }
    dataArray.push(data)
    localStorage.setItem('dataArray', JSON.stringify(dataArray)) 
}
document.getElementById("form").addEventListener("submit",handalData)