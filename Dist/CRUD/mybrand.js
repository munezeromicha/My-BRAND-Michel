"use strict";
const form = document.getElementById('form');
const userName = document.getElementById('inputOne');
const email = document.getElementById('in_2');
const locate = document.getElementById('in_3');
const sub = document.getElementById('in_4');
const mess = document.getElementById('in_5');
const pass = document.getElementById('pass_1');
const confirm = document.getElementById('pass_3');
form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});
const verError = (element, message) => {
    const errorControl = element.parentElement;
    const showError = errorControl.querySelector('.error');
    showError.innerText = message;
    errorControl.classList.add('error');
    errorControl.classList.remove('success');
};
const verPass = (element) => {
    const errorControl = element.parentElement;
    const showError = errorControl.querySelector('.error');
    showError.innerText = '';
    errorControl.classList.add('success');
    errorControl.classList.remove('error');
};
const checkEmail = (email) => {
    const sign = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return sign.test(String(email).toLowerCase());
};
function validateInputs() {
    const fullName = userName.value.trim();
    const inEmail = email.value.trim();
    const oneLocate = locate.value.trim();
    const subJect = sub.value.trim();
    const messValue = mess.value.trim();
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
        verError(email, 'Email field is required!');
    }
    else if (!checkEmail(inEmail)) {
        verError(email, 'Enter a valid email!');
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
    if (subJect === '') {
        verError(sub, 'Subject field is required!');
    }
    else {
        verPass(sub);
    }
    if (messValue === '') {
        verError(mess, 'Message field is required');
    }
    else {
        verPass(mess);
    }
}
