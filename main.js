let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let input4 = document.getElementById("input4");
let button = document.getElementById("button");

input1.addEventListener("change", () => {
  let tax = parseFloat((15 / 100) * input1.value);
  total = parseFloat(tax + parseFloat(input1.value));
  input2.setAttribute("value", total);
});

input3.addEventListener("change", () => {
  let persons = parseFloat(input3.value);
  let tax = parseFloat(15 / 100) * input1.value;
  let total = parseFloat(tax + parseFloat(input1.value));
  totalOfEachPerson = parseFloat(total / persons);
  input4.setAttribute("value", totalOfEachPerson);
});
