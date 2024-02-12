const form = document.getElementById('form') as HTMLFormElement | null;
const userName = document.getElementById('name_1') as HTMLInputElement | null;
const email = document.getElementById('email_1') as HTMLInputElement | null;
const locate = document.getElementById('mess') as HTMLInputElement | null;

if (form && userName && email && locate) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        validateInputs();
    });
}

const verError = (Element: HTMLElement, message: string) => {
    const errorControl = Element.parentElement;
    const showError = errorControl?.querySelector('.error') as HTMLElement | null;

    if (showError) {
        showError.innerText = message;
        errorControl.classList.add('error');
        errorControl.classList.remove('success');
    }
}

const verPass = (Element: HTMLElement) => {
    const errorControl = Element.parentElement;
    const showError = errorControl?.querySelector('.error') as HTMLElement | null;

    if (showError) {
        showError.innerText = '';
        errorControl.classList.add('success');
        errorControl.classList.remove('error');
    }
}

const checkEmail = (email: string) => {
    const sign = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return sign.test(String(email).toLowerCase());
}

function validateInputs() {
    if (!userName || !email || !locate) return;

    const fullName = userName.value.trim();
    const inEmail = email.value.trim();
    const oneLocate = locate.value.trim();

    if (fullName === '') {
        verError(userName, 'Fullname field is required!');
    } else if (fullName.length < 8) {
        verError(userName, 'Username must not be less than 8 characters');
    } else {
        verPass(userName);
    }

    if (inEmail === '') {
        verError(email, 'Email field is Required!');
    } else if (!checkEmail(inEmail)) {
        verError(email, 'Enter the valid email!');
    } else {
        verPass(email);
    }

    if (oneLocate === '') {
        verError(locate, 'Comment field is required!');
    } else {
        verPass(locate);
    }
}