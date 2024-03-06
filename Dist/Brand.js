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
const contain = document.getElementById('form');
contain.addEventListener('submit', (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    const userName = document.getElementById('inputOne');
    const email = document.getElementById('in_2');
    // const locate = document.getElementById('in_3') as HTMLInputElement | null;
    const sub = document.getElementById('in_4');
    const mess = document.getElementById('in_5');
    // const pass = document.getElementById('pass_1') as HTMLInputElement | null;
    // const confirm = document.getElementById('pass_3') as HTMLInputElement | null;
    if (form && userName && email && sub && mess) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            validateInputs();
        });
    }
    const verError = function (element, message) {
        const errorControl = element.parentElement;
        const showError = errorControl === null || errorControl === void 0 ? void 0 : errorControl.querySelector('.error');
        if (showError) {
            showError.innerText = message;
            errorControl === null || errorControl === void 0 ? void 0 : errorControl.classList.add('error');
            errorControl === null || errorControl === void 0 ? void 0 : errorControl.classList.remove('success');
        }
    };
    const verPass = function (element) {
        const errorControl = element.parentElement;
        if (errorControl) {
            const showError = errorControl.querySelector('.error');
            if (showError) {
                showError.innerText = '';
                errorControl.classList.add('success');
                errorControl.classList.remove('error');
            }
        }
    };
    const checkEmail = function (email) {
        const sign = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return sign.test(String(email).toLowerCase());
    };
    function validateInputs() {
        if (!userName || !email || !locate || !sub || !mess)
            return;
        const fullName = userName.value.trim();
        const inEmail = email.value.trim();
        // const oneLocate = locate.value.trim();
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
        // if (oneLocate === '') {
        //     verError(locate, 'Location field is required!');
        // } else {
        //     verPass(locate);
        // }
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
}));
function toggleMenu() {
    // alert("I am clicked!");
    const menu = document.querySelector('.menu');
    if (menu) {
        menu.classList.toggle('active');
    }
}
function closeMenu() {
    const menu = document.querySelector('.menu');
    if (menu) {
        menu.classList.remove('active');
    }
}
// integration-FE-BE
const inter = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = {};
});
