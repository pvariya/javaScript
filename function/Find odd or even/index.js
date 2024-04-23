const oddEven = () => {
  let input = document.getElementById("input").value;
  if (input % 2 == 0) {
    document.getElementById("output").innerHTML = `it's an even number`;
  } else {
    document.getElementById("output").innerHTML = `this is a odd number`;
  }
};
