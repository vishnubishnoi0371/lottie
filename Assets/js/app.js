const name = document.getElementById("name");
const errorname = document.getElementById("errorname");
const number = document.getElementById("number");
const errornumber = document.getElementById("errornumber");
const email = document.getElementById("email");
const erroremail = document.getElementById("erroremail");
const password = document.getElementById("password");
const errorpassword = document.getElementById("errorpassword");
const submit = document.getElementById("submit");
const form = document.getElementById("myForm");

const regex = {
  Name: /^[a-zA-Z\s]+$/,
  Number: /^\d{10}$/,
  Email: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
  Password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
};

function validateInput(input, regex, errorElement, errorMessage) {
  if (!regex.test(input.value)) {
    errorElement.innerHTML = errorMessage;
    return false;
  } else {
    errorElement.innerHTML = "";
    return true;
  }
}

function validateForm(showErrors = false) {
  const isNameValid = validateInput(
    name,
    regex.Name,
    errorname,
    "Name is required"
  );
  const isNumberValid = validateInput(
    number,
    regex.Number,
    errornumber,
    "Number is required"
  );
  const isEmailValid = validateInput(
    email,
    regex.Email,
    erroremail,
    "Email is required"
  );
  const isPasswordValid = validateInput(
    password,
    regex.Password,
    errorpassword,
    "Password is required"
  );

  const isValid =
    isNameValid && isNumberValid && isEmailValid && isPasswordValid;

  if (showErrors) {
    if (!isNameValid) errorname.innerHTML = "Name is required";
    if (!isNumberValid) errornumber.innerHTML = "Number is required";
    if (!isEmailValid) erroremail.innerHTML = "Email is required";
    if (!isPasswordValid) errorpassword.innerHTML = "Password is required";
  }

  submit.disabled = !isValid;
  submit.style.cursor = isValid ? "pointer" : "default";

  return isValid;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (validateForm(true)) {
    alert("Form submitted successfully");
    name.value = "";
    number.value = "";
    email.value = "";
    password.value = "";
    submit.disabled = true;
  }
});

number.addEventListener("input", function (event) {
  const value = event.target.value;
  if (!/^\d*$/.test(value)) {
    number.value = value.replace(/\D/g, "");
  }
});

document.querySelectorAll(".custom_input").forEach((input) => {
  input.addEventListener("input", () => validateForm(false));
});

document.getElementById("toggle-theme").addEventListener("click", function () {
  const body = document.body;
  if (body.classList.contains("bg-dark")) {
    body.classList.remove("bg-dark");
    body.classList.add("bg-orange");
  } else if (body.classList.contains("bg-orange")) {
    body.classList.remove("bg-orange");
    body.classList.add("bg-green");
  } else {
    body.classList.remove("bg-green");
    body.classList.add("bg-dark");
  }
});
