const submit = document.querySelector(".submit");
const form = document.querySelector("form");
const input = document.querySelector("input");

form.addEventListener("submit", validate);
submit.addEventListener("click", validate);

function validate(e) {
  e.preventDefault();

  const inputValue = input.value;
  console.log(inputValue);
}
