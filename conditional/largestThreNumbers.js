let num1 = 4,
  num2 = 3,
  num3 = 7;

if (num1 > num2) {
  if (num1 > num3) {
    console.log("num1 is big");
  } else {
    console.log("num3 is big");
  }
} else {
  if (num2 > num3) {
    console.log("num2 is big");
  } else {
    console.log("mun3 is big");
  }
}

//second method
console.log("second method......");
if (num1 > num2 && num1 > num3) {
  console.log("num1 is the largest");
} else if (num2 > num3) {
  console.log("num2 is the largest");
} else {
  console.log("num3 is the largest");
}
