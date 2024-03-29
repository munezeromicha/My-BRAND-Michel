const form = document.getElementById('form')
var userName = document.getElementById('name_1')
const email = document.getElementById('email_1')
const locate = document.getElementById('mess')

form.addEventListener('submit', e =>{
    e.preventDefault();

    validateInputs();
});
    const verError = (Element,message) => {
        const errorControl = Element.parentElement;
        const showError = errorControl.querySelector('.error');

        showError.innerText = message;
        errorControl.classList.add('error')
        errorControl.classList.remove('success')
    }
    const verPass = Element =>{
        const errorControl = Element.parentElement;
        const showError = errorControl.querySelector('.error');

        showError.innerText = '';
        errorControl.classList.add('success')
        errorControl.classList.remove('error')
    }
    const checkEmail = email =>{
        const sign = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return sign.test(String(email).toLowerCase());
    }
function validateInputs(){
    const fullName = userName.value.trim();
    const inEmail = email.value.trim();
    const oneLocate = locate.value.trim();

    if(fullName === ''){
        verError(userName, 'Fullname field is required!');
    } else if(fullName < 8){
        verError(userName, 'username must not be less than 8 character')
    }
    else{
        verPass(userName);
    }

    if(inEmail ===''){
        verError(email, 'Email field is Required!');
    }
    else if(!checkEmail(inEmail)){
        verError(email, 'Enter the valid email!');
    }
    else{
        verPass(email)
    }

    if(oneLocate === ''){
        verError(locate, 'Comment field is required!');
    }
    else{
        verPass(locate);
    }

}