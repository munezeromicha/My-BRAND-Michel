"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const form = document.getElementById('form');
const userName = document.getElementById('name_1');
const email = document.getElementById('email_1');
const message = document.getElementById('mess');
if (form && userName && email && message) {
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
const check = (values) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch('https://mybrand-be-6rxz.onrender.com/api/:id/comments', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: { 'Content-Type': 'application/json' }
    });
    const data = yield res.json();
    console.log(data);
    //  window.location.href="/LogIn/Login.html";
});
function validateInputs() {
    if (!userName || !email || !message)
        return;
    const fullName = userName.value.trim();
    const inEmail = email.value.trim();
    const onemessage = message.value.trim();
    if (fullName === '') {
        verError(userName, 'Fullname field is required!');
    }
    else if (fullName.length < 8) {
        verError(userName, 'Username must not be less than 8 characters');
    }
    else {
        // verPass(userName);
        if (inEmail === '') {
            verError(email, 'Email field is Required!');
        }
        else if (!checkEmail(inEmail)) {
            verError(email, 'Enter the valid email!');
        }
        else {
            // verPass(email);
            if (onemessage === '') {
                verError(message, 'Comment field is required!');
            }
            else {
                // verPass(message);
                const data = {
                    name: fullName,
                    email: inEmail,
                    idea: onemessage
                };
                check(data);
            }
        }
    }
}
