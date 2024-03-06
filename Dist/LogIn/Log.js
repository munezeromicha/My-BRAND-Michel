"use strict";
const form = document.getElementById('form');
const emailInput = document.getElementById('name_1');
const passInput = document.getElementById('pass_1');
if (form && emailInput && passInput) {
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
    const inEmail = (emailInput === null || emailInput === void 0 ? void 0 : emailInput.value.trim()) || '';
    const firstPass = (passInput === null || passInput === void 0 ? void 0 : passInput.value.trim()) || '';
    if (inEmail === '') {
        verError(emailInput, 'Email field is Required!');
    }
    else if (!checkEmail(inEmail)) {
        verError(emailInput, 'Enter the valid email!');
    }
    else {
        verPass(emailInput);
    }
    if (firstPass === '') {
        verError(passInput, 'Password is required!');
    }
    else if (firstPass.length < 8) {
        verError(passInput, 'Password must be at least 8 character!');
    }
    else {
        verPass(passInput);
    }
}
