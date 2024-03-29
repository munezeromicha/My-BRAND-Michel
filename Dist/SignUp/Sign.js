"use strict";
const form = document.getElementById('form');
const userName = document.getElementById('name_1');
const email = document.getElementById('name_2');
const locate = document.getElementById('name_3');
const pass = document.getElementById('pass_1');
const conf = document.getElementById('pass_3');
if (form && userName && email && locate && pass && conf) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        validateInputs();
    });
}
const verError = (Element, message) => {
    const errorControl = Element.parentElement;
    const showError = errorControl === null || errorControl === void 0 ? void 0 : errorControl.querySelector('.error');
    if (showError) {
        showError.innerText = message;
        errorControl.classList.add('error');
        errorControl.classList.remove('success');
    }
};
const verPass = (Element) => {
    const errorControl = Element.parentElement;
    const showError = errorControl === null || errorControl === void 0 ? void 0 : errorControl.querySelector('.error');
    if (showError) {
        showError.innerText = '';
        errorControl.classList.add('success');
        errorControl.classList.remove('error');
    }
};
const checkEmail = (email) => {
    const sign = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return sign.test(String(email).toLowerCase());
};
function validateInputs() {
    if (!userName || !email || !locate || !pass || !conf)
        return;
    const fullName = userName.value.trim();
    const inEmail = email.value.trim();
    const oneLocate = locate.value.trim();
    const firstPass = pass.value.trim();
    const secPass = conf.value.trim();
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
