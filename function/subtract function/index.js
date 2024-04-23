const subtraction = (num1, num2, num3, num4) => {
  return (subt = num1 - num2 - num3 - num4);
};
const sum = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let num3 = document.getElementById("num3").value;
  let num4 = document.getElementById("num4").value;

  document.getElementById("output").innerHTML = subtraction(
    num1,
    num2,
    num3,
    num4
  );
};
