 

let minute = prompt('enter minute : ');
let second = prompt('enter second :');

const timer = () =>{

   if(second > 0){
    second--;
   }
   
    if(second == 0 && minute > 0){
        sec = 59;
        min--;
    }
    if(minute == 0 && second == 0){
        clearInterval(id);
    }

    document.getElementById('minute').innerHTML =  min;
    document.getElementById('second').innerHTML = sec;
}

let id = setInterval(()=>{
    timer()
},1000)
