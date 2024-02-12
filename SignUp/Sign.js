var form = document.getElementById('form');
var userName = document.getElementById('name_1');
var email = document.getElementById('name_2');
var locate = document.getElementById('name_3');
var pass = document.getElementById('pass_1');
var conf = document.getElementById('pass_3');
if (form && userName && email && locate && pass && conf) {
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
    if (!userName || !email || !locate || !pass || !conf)
        return;
    var fullName = userName.value.trim();
    var inEmail = email.value.trim();
    var oneLocate = locate.value.trim();
    var firstPass = pass.value.trim();
    var secPass = conf.value.trim();
    if (fullName === '') {
        verError(userName, 'Name field is required!');
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
        verError(locate, 'Location field is required!');
    }
    else {
        verPass(locate);
    }
    if (firstPass === '') {
        verError(pass, 'Password is required!');
    }
    else if (firstPass.length < 8) {
        verError(pass, 'Password must be at least 8 characters!');
    }
    else {
        verPass(pass);
    }
    if (secPass === '') {
        verError(conf, 'Please confirm the password!');
    }
    else if (secPass !== firstPass) {
        verError(conf, 'Password does not match');
    }
    else {
        verPass(conf);
    }
}
