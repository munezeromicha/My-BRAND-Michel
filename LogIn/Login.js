const form = document.getElementById('form')
const email = document.getElementById('name_1')
const pass = document.getElementById('pass_1')

form.addEventListener('submit', e => {
  e.preventDefault();

  validateInputs();
});
const verError = (Element, message) => {
  const errorControl = Element.parentElement;
  const showError = errorControl.querySelector('.error');

  showError.innerText = message;
  errorControl.classList.add('error')
  errorControl.classList.remove('success')
}
const verPass = Element => {
  const errorControl = Element.parentElement;
  const showError = errorControl.querySelector('.error');

  showError.innerText = '';
  errorControl.classList.add('success')
  errorControl.classList.remove('error')
}
const checkEmail = email => {
  const sign = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return sign.test(String(email).toLowerCase());
}
function validateInputs() {
  const inEmail = email.value.trim();
  const firstPass = pass.value.trim();

  if (inEmail === '') {
    verError(email, 'Email field is Required!');
  }
  else if (!checkEmail(inEmail)) {
    verError(email, 'Enter the valid email!');
  }
  else {
    if (firstPass === '') {
      verError(pass, 'Password is required!')
    } else if (firstPass.length < 8) {
      verError(pass, 'Password must be at least 8 character!')
    }
    else {
      const body = {
        email: inEmail,
        password: firstPass
      };

      function loginUser(body) {

        fetch('https://mybrand-be-6rxz.onrender.com/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        })
          .then(res => res.json())
          .then(async response => {

            if (response.status) {

              console.log("User logged in successfully");
              showToast("Login successful");

              const token = response.token

              localStorage.setItem('token', token)

              window.location.href = "/Admin-panel/Admin.html";

            } else {

              console.error("Login failed");
              alert("Login failed");
            }
          })
          .catch(error => {
            console.error("Error:", error);
            showToast("Error occurred");
          });
      }

      function showToast(message) {
        Toastify({
            text: message,
            duration: 3000,
            gravity: "top",
            position: "right",
        }).showToast();
    }

      loginUser(body);
    }

  }
}