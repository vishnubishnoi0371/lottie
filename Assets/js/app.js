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
  Password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
};

function validateForm() {
  let isValid = true;

  if (!regex.Name.test(name.value)) {
    errorname.innerHTML = "invalid name";
    isValid = false;
  } else {
    errorname.innerHTML = "";
  }
  if (!regex.Number.test(number.value)) {
    errornumber.innerHTML = "invalid number";
    isValid = false;
  } else {
    errornumber.innerHTML = "";
  }
  if (!regex.Email.test(email.value)) {
    erroremail.innerHTML = "invalid email";
    isValid = false;
  } else {
    erroremail.innerHTML = "";
  }
  if (!regex.Password.test(password.value)) {
    errorpassword.innerHTML = "invalid password";
    isValid = false;
  } else {
    errorpassword.innerHTML = "";
  }

  submit.disabled = !isValid;
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
  }
});
