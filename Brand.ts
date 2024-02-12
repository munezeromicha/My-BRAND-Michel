const form = document.getElementById('form') as HTMLFormElement | null;
const userName = document.getElementById('inputOne') as HTMLInputElement | null;
const email = document.getElementById('in_2') as HTMLInputElement | null;
const locate = document.getElementById('in_3') as HTMLInputElement | null;
const sub = document.getElementById('in_4') as HTMLInputElement | null;
const mess = document.getElementById('in_5') as HTMLInputElement | null;
// const pass = document.getElementById('pass_1') as HTMLInputElement | null;
// const confirm = document.getElementById('pass_3') as HTMLInputElement | null;

if (form && userName && email && locate && sub && mess) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        validateInputs();
    });
}

const verError = function (element: HTMLElement, message: string) {
    const errorControl = element.parentElement;
    const showError = errorControl?.querySelector('.error') as HTMLElement | null;
    if (showError) {
        showError.innerText = message;
        errorControl?.classList.add('error');
        errorControl?.classList.remove('success');
    }
};

const verPass = function (element: HTMLElement) {
    const errorControl = element.parentElement;
    if (errorControl) {
        const showError = errorControl.querySelector('.error') as HTMLElement | null;
        if (showError) {
            showError.innerText = '';
            errorControl.classList.add('success');
            errorControl.classList.remove('error');
        }
    }
};

const checkEmail = function (email: string) {
    const sign = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return sign.test(String(email).toLowerCase());
};

function validateInputs() {
    if (!userName || !email || !locate || !sub || !mess) return;

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

function toggleMenu() {
    // alert("I am clicked!");
    const menu = document.querySelector('.menu') as HTMLElement | null;
    if (menu) {
        menu.classList.toggle('active');
    }
}

function closeMenu() {
    const menu = document.querySelector('.menu') as HTMLElement | null;
    if (menu) {
        menu.classList.remove('active');
    }
}
