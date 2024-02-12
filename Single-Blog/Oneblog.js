var form = document.getElementById('form');
var userName = document.getElementById('name_1');
var email = document.getElementById('email_1');
var locate = document.getElementById('mess');
if (form && userName && email && locate) {
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
function validateInputs() {
    if (!userName || !email || !locate)
        return;
    var fullName = userName.value.trim();
    var inEmail = email.value.trim();
    var oneLocate = locate.value.trim();
    if (fullName === '') {
        verError(userName, 'Fullname field is required!');
    }
    else if (fullName.length < 8) {
        verError(userName, 'Username must not be less than 8 characters');
    }
    else {
        verPass(userName);
    }
    if (inEmail === '') {
        verError(email, 'Email field is Required!');
    }
    else if (!checkEmail(inEmail)) {
        verError(email, 'Enter the valid email!');
    }
    else {
        verPass(email);
    }
    if (oneLocate === '') {
        verError(locate, 'Comment field is required!');
    }
    else {
        verPass(locate);
    }
}
