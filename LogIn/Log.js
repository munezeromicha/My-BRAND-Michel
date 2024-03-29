var form = document.getElementById('form');
var emailInput = document.getElementById('name_1');
var passInput = document.getElementById('pass_1');
if (form && emailInput && passInput) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        validateInputs();
    });
}
var verError = function (Element, message) {
    var errorControl = Element.parentElement;
    var showError = errorControl === null || errorControl === void 0 ? void 0 : errorControl.querySelector('.error');
    if (showError) {
        showError.innerText = message;
        errorControl.classList.add('error');
        errorControl.classList.remove('success');
    }
};
var verPass = function (Element) {
    var errorControl = Element.parentElement;
    var showError = errorControl === null || errorControl === void 0 ? void 0 : errorControl.querySelector('.error');
    if (showError) {
        showError.innerText = '';
        errorControl.classList.add('success');
        errorControl.classList.remove('error');
    }
};
var checkEmail = function (email) {
    var sign = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return sign.test(String(email).toLowerCase());
};


const check = async(values)=>{
    const res= await fetch('https://mybrand-be-6rxz.onrender.com/api/login',{
        method:'POST',
        body:JSON.stringify(values),
        headers:{'Content-Type':'application/json'} 
     })

     const data = await res.json();
     console.log(data);

     window.location.href="/Admin-panel/Admin.html";
}

function validateInputs() {
    var inEmail =  emailInput.value.trim();
    var firstPass =  passInput.value.trim();
    if (inEmail === '') {
        verError(emailInput, 'Email field is Required!');
    }
    else if (!checkEmail(inEmail)) {
        verError(emailInput, 'Enter the valid email!');
    }
    else {
        // verPass(emailInput);
        if (firstPass === '') {
            verError(passInput, 'Password is required!');
        }
        else if (firstPass.length < 8) {
            verError(passInput, 'Password must be at least 8 character!');
        }
        else {
            // verPass(passInput);
            const data = {
                email: inEmail,
                password: firstPass
            }
            check(data);
        }
    }

}
