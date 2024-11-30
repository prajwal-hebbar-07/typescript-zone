const buttonEl = document.querySelector("button");
const input1El = document.getElementById("num1");
const input2El = document.getElementById("num2");

function add(num1, num2) {
  return num1 + num2;
}

buttonEl.addEventListener("click", function () {
  console.log(add(input1El.value + input2El.value));
});
