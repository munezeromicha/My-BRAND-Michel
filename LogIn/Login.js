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
    // verPass(email)
    if (firstPass === '') {
      verError(pass, 'Password is required!')
    } else if (firstPass.length < 8) {
      verError(pass, 'Password must be at least 8 character!')
    }
    else {
      // verPass(pass)

      const body = {
        email: inEmail,
        password: firstPass
      };


      // Function to perform login
      function loginUser(body) {
        // Assuming you're using fetch for API calls
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
              // User logged in successfully
              console.log("User logged in successfully");
              showToast("Login successful");

              const token = response.token

              localStorage.setItem('token', token)
              // console.log(token)
              window.location.href = "/Adminpanel/Admin.html";
              // document.cookie = `userToken=${response.token}; path=/`;

            } else {
              // Login failed
              console.error("Login failed");
              showToast("Login failed");
            }
          })
          .catch(error => {
            console.error("Error:", error);
            showToast("Error occurred");
          });
      }

      // Function to show toast notification
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