const divisibly=()=>{
    let input = document.getElementById("input").value
    let input2 = document.getElementById("input2").value

    for(let i=1;i<=input;i++){
        if(i % input2 == 0){
            console.log(i);
        }
    }
}