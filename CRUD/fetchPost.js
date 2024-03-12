var form = document.getElementById("form");
var title = document.getElementById("title");
var photoInput = document.getElementById("image");
var rich = quill.getText();

if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        validateInputs();
    });
}

async function createBlog() {
    const content =  quill.getText().trim();
    const titleValue = title.value.trim();
    const image = photoInput.files[0];

    const token = localStorage.getItem("token");

    if (!token) {
        window.location.href = '/LogIn/Login.html';
        return; 
    }

    const formData = new FormData();
    formData.append("title", titleValue);
    formData.append("content", content);
    formData.append("image", image);

    const response = await fetch("https://mybrand-be-6rxz.onrender.com/api/blogs", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: formData,
    });

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    const data = await response.json();
    showToast("Blog created successfully!!");
    
    title.value = '';
    photoInput.value = '';
    rich.value = '';
    window.location.href = '/CRUD2/addBlog.html';

    function showToast(message) {
        Toastify({
          text: message,
          duration: 3000,
          gravity: "top",
          position: "right",
        }).showToast();
      }
}

function validateInputs() {
    if (!title || !photoInput || !rich) return;

    var oneTitle = title.value.trim();
    var richText = quill.getText().trim();
    var photo = photoInput.value;

    if (oneTitle === '') {
        verError(title, 'Please fill in the title field.');
    } else {
        if (!photoInput.files || photoInput.files.length === 0) {
            verError(photoInput, 'Please select a photo.');
        } else {
            if (richText === '') {
                verError(rich, 'Please fill in the content field.');
            } else {
                createBlog();
            }
        }
    }
}

function verError(Element, message) {
    var errorControl = Element.parentElement;
    var showError = errorControl ? errorControl.querySelector('.error') : undefined;
    if (showError) {
        showError.innerText = message;
        errorControl.classList.add('error');
        errorControl.classList.remove('success');
    }
}

function verPass(Element) {
    var errorControl = Element.parentElement;
    var showError = errorControl ? errorControl.querySelector('.error') : undefined;
    if (showError) {
        showError.innerText = '';
        errorControl.classList.add('success');
        errorControl.classList.remove('error');
    }
}

// End of blog creation