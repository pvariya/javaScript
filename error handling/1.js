const purv=(a,b)=>{
    if(a==0){
        throw new Error("not possible")
    }
    if(b==0){
        throw new Error("not possible")
    }
    return a/b;
}
try{
    console.log(purv(10,0));
}
catch(err){
    console.log("error: " + err);   
}