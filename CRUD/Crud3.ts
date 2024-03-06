const form = document.getElementById("form") as HTMLFormElement | null;
const oneField = document.getElementById("myTitle") as HTMLInputElement | null;
const photoInput = document.getElementById("photo") as HTMLInputElement | null;
const rich = document.getElementById("summernote") as HTMLTextAreaElement | null;

function mySave() {
    const allBlog: any[] = JSON.parse(localStorage.getItem("allBlog")) || [];
    const thePic: any[] = JSON.parse(localStorage.getItem("thePic")) || [];

    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const donChange = characters.length;
    for (let i = 0; i < 5; i++) {
        result += characters.charAt(Math.floor(Math.random() * donChange))
    }

    if (photoInput) {
        photoInput.addEventListener("change", function(){
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
        }

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

function validateInputs() {
    if (!oneField || !photoInput || !rich) return;

    const oneTitle = oneField.value.trim();
    const richText = rich.value.trim();

    if (oneTitle === '') {
        verError(oneField, 'Please fill it well.');
    } else {
        verPass(oneField);
    }

    if (photoInput.files && photoInput.files.length === 0) {
        verError(photoInput, 'Please select a photo.');
    }

    if (richText === '') {
        verError(rich, 'Please fill it well.');
    } else {
        verPass(rich);
    }
}

