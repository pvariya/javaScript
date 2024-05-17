let weekDays = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];



const time = () => {
    let date = new Date()
    let second = date.getSeconds()
    let minute = date.getMinutes()
    let hour = date.getHours()
    let day = date.getDate() 
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    let weekday = date.getDay(weekDays)
    
    // console.log(second
    document.getElementById("second").innerHTML=second;
    document.getElementById("minute").innerHTML=minute;
    document.getElementById("hours").innerHTML=hour;
    document.getElementById("days").innerHTML=day;
    document.getElementById("month").innerHTML=month;
    document.getElementById("year").innerHTML=year;
    document.getElementById("weekday").innerHTML=weekDays[weekday];
    
    if(hour < 12){
        document.getElementById("amPm").innerHTML="AM"
    }
    else{
        document.getElementById("amPm").innerHTML="PM"
    }
}
setInterval(() => {
    time()
},1000);