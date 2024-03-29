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


// Get the blog ID from the URL query parameter
const urlParams = new URLSearchParams(window.location.search);
const blogId = urlParams.get('id');


// Fetch the specific blog's details using the blog ID
fetch(`https://mybrand-be-6rxz.onrender.com/api/blogs/${blogId}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(blog => {
        // Populate the input fields with the existing data
        document.getElementById('title').value = blog.title;
        // document.getElementById('image').value = blog.image;
        quill.setText(blog.content);

        // Store the blog object for reference when updating
        window.blog = blog;
    })
    .catch(error => console.error('Error fetching blog details:', error));

// Function to update the blog with edited data
function updateBlog() {
    const updatedData = {
        title: document.getElementById('title').value,
        // image: document.getElementById('image').value, // Don't include image as it's a file input
        content: quill.getText()
    };

    // Merge the updated data with existing data
    const mergedData = { ...window.blog, ...updatedData };

    fetch(`https://mybrand-be-6rxz.onrender.com/api/blogs/${blogId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(mergedData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        showToast("Blog edited successfully!");
        window.location.href = "/CRUD2/addBlog.html";

        title.value = '';
        rich.value = '';
    })
    .catch(error => console.error("Error editing blog:", error));
}

function showToast(message) {
    Toastify({
      text: message,
      duration: 3000,
      gravity: "top",
      position: "right",
    }).showToast();
  }





// // Fetch the specific blog's details using the blog ID
// fetch(`https://mybrand-be-6rxz.onrender.com/api/blogs/${blogId}`)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(blog => {
//         // Populate the input fields with the existing data
//         document.getElementById('title').value = blog.title;
//         // document.getElementById('image').value = blog.image;
//         document.getElementById('content').value = blog.content;
//     })
//     .catch(error => console.error('Error fetching blog details:', error));

// Function to update the blog with edited data
// function updateBlog() {
//     const updatedData = {
//         title: document.getElementById('title').value,
//         // image: document.getElementById('image').value,
//         content: document.getElementById('content').value
//     };

// // Fetch the specific blog's details using the blog ID
// fetch(`https://mybrand-be-6rxz.onrender.com/api/blogs/${blogId}`)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(blog => {
//         // Populate the input fields with the existing data
//         document.getElementById('title').value = blog.title;
//         document.getElementById('content').value = blog.content;

//         // Display the image preview
//         const imagePreview = document.getElementById('image');
//         imagePreview.src = blog.image; // Assuming 'image-preview' is the ID of the <img> tag where you want to display the preview
//     })
//     .catch(error => console.error('Error fetching blog details:', error));

// }
