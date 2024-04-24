const minMax=()=>{
    let max = document.getElementById("input").value
    let min = document.getElementById("input2").value


    if(max > min){
        for(let i=max;i>min;i--){
            console.log(i);
        }
    }
    else{
        console.log("renter value");
    }
}