let array=[1,2,3,4,5,6,7,8,9]


// map
console.log("print");
array.map((item)=>{
    console.log(item);
})

console.log("even odd");
array.map((evenOdd)=>{
    if(evenOdd % 2 == 0){
        console.log("even :- ",evenOdd);
    }
    else{
        console.log("odd  :- ",evenOdd);
    }
})


// filter
console.log("filter");
let filterData = array.filter((item)=>{
    return item % 2== 0;
})
console.log(...filterData);




array.map((item)=>{
    let array2 = array.filter((item)=>{
     return item % 2 == 0;
    })

    console.log(...array2);
})
