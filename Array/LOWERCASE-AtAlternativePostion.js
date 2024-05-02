lower = () => {

    for (let i = 0; i < array.length; i++) {
        if (i % 2 == 0) {
            console.log(array[i]);
        }
        else {
            console.log(array[i].toLowerCase());
        }
    }
    // return ""
}

let array = ["RED", "AND", "WHITE"]

let p = lower() 
console.log(p);
