const EasyWoodCutter=()=>{
    let input = document.getElementById("input").value
if(input %3==0){
    document.getElementById("output").innerHTML=`yes`
}
else{
    document.getElementById("output").innerHTML=`no`
}
}