const name = document.getElementById("name");
const errorname = document.getElementById("errorname");
const number = document.getElementById("number");
const errornumber = document.getElementById("errornumber");
const email = document.getElementById("email");
const erroremail = document.getElementById("erroremail");
const password = document.getElementById("password");
const errorpassword = document.getElementById("errorpassword");
const submit = document.getElementById("submit");

const regex = {
  Name: /^[a-zA-Z\s]+$/,
  Number: /^\d{10}$/,
  Email: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
  Password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
};

function validateForm() {
  let isValid = true;

  if (!regex.Name.test(name.value)) {
    errorname.innerHTML = "Name is required";
    isValid = false;
  } else {
    errorname.innerHTML = "";
  }

  if (!regex.Number.test(number.value)) {
    errornumber.innerHTML = "Number is required";
    isValid = false;
  } else {
    errornumber.innerHTML = "";
  }

  if (!regex.Email.test(email.value)) {
    erroremail.innerHTML = "Email is required";
    isValid = false;
  } else {
    erroremail.innerHTML = "";
  }

  if (!regex.Password.test(password.value)) {
    errorpassword.innerHTML = "Password is required";
    isValid = false;
  } else {
    errorpassword.innerHTML = "";
  }

  submit.disabled = !isValid;
  submit.style.cursor = isValid ? "pointer" : "not-allowed";
  return isValid;
}

document.querySelectorAll(".custom_input").forEach((input) => {
  input.addEventListener("input", validateForm);
});

submit.addEventListener("click", function (event) {
  event.preventDefault();
  if (validateForm()) {
    alert("Form submitted successfully");
    name.value = "";
    number.value = "";
    email.value = "";
    password.value = "";
    submit.disabled = true;
    submit.style.cursor = "not-allowed";
  }
});

// Additional validation for number input to allow only digits
number.addEventListener("input", function (event) {
  const value = event.target.value;
  if (!/^\d*$/.test(value)) {
    number.value = value.replace(/\D/g, "");
  }
});
