"use strict";
const form = document.getElementById("form");
const oneField = document.getElementById("myTitle");
const photoInput = document.getElementById("photo");
const rich = document.getElementById("summernote");
function mySave() {
    const allBlog = JSON.parse(localStorage.getItem("allBlog")) || [];
    const thePic = JSON.parse(localStorage.getItem("thePic")) || [];
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const donChange = characters.length;
    for (let i = 0; i < 5; i++) {
        result += characters.charAt(Math.floor(Math.random() * donChange));
    }
    if (photoInput) {
        photoInput.addEventListener("change", function () {
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                const photoObject = {
                    imagePath: reader.result
                };
                thePic.push(photoObject);
                localStorage.setItem("thePic", JSON.stringify(thePic));
            });
            reader.readAsDataURL(this.files[0]);
        });
    }
    if (oneField && rich) {
        const newBlog = {
            id: result,
            myContent: oneField.value,
            myPic: '',
            areaText: rich.value
        };
        allBlog.push(newBlog);
        localStorage.setItem("allBlog", JSON.stringify(allBlog));
    }
}
if (form) {
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
function validateInputs() {
    if (!oneField || !photoInput || !rich)
        return;
    const oneTitle = oneField.value.trim();
    const richText = rich.value.trim();
    if (oneTitle === '') {
        verError(oneField, 'Please fill it well.');
    }
    else {
        verPass(oneField);
    }
    if (photoInput.files && photoInput.files.length === 0) {
        verError(photoInput, 'Please select a photo.');
    }
    if (richText === '') {
        verError(rich, 'Please fill it well.');
    }
    else {
        verPass(rich);
    }
}
