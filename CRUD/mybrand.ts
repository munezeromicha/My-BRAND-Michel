const form = document.getElementById('form') as HTMLFormElement;
const userName = document.getElementById('inputOne') as HTMLInputElement;
const email = document.getElementById('in_2') as HTMLInputElement;
const locate = document.getElementById('in_3') as HTMLInputElement;
const sub = document.getElementById('in_4') as HTMLInputElement;
const mess = document.getElementById('in_5') as HTMLInputElement;
const pass = document.getElementById('pass_1') as HTMLInputElement;
const confirm = document.getElementById('pass_3') as HTMLInputElement;

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

const verError = (element: HTMLElement, message: string) => {
    const errorControl = element.parentElement as HTMLElement;
    const showError = errorControl.querySelector('.error') as HTMLElement;

    showError.innerText = message;
    errorControl.classList.add('error');
    errorControl.classList.remove('success');
};

const verPass = (element: HTMLElement) => {
    const errorControl = element.parentElement as HTMLElement;
    const showError = errorControl.querySelector('.error') as HTMLElement;

    showError.innerText = '';
    errorControl.classList.add('success');
    errorControl.classList.remove('error');
};

const checkEmail = (email: string) => {
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
    } else if (fullName.length < 8) {
        verError(userName, 'Username must not be less than 8 characters');
    } else {
        verPass(userName);
    }

    if (inEmail === '') {
        verError(email, 'Email field is required!');
    } else if (!checkEmail(inEmail)) {
        verError(email, 'Enter a valid email!');
    } else {
        verPass(email);
    }

    if (oneLocate === '') {
        verError(locate, 'Location field is required!');
    } else {
        verPass(locate);
    }

    if (subJect === '') {
        verError(sub, 'Subject field is required!');
    } else {
        verPass(sub);
    }

    if (messValue === '') {
        verError(mess, 'Message field is required');
    } else {
        verPass(mess);
    }
}