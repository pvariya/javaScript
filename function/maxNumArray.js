function findMax(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

const numbers = [10, 20, 3, 4, 5];
console.log("Maximum number:", findMax(numbers));
