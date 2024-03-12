var form = document.getElementById("form");
var title = document.getElementById("title");
var photoInput = document.getElementById("image");
var rich = quill.getText();

if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        updateBlog();
    });
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
        quill.setText(blog.content);

        // Store the blog object for reference when updating
        window.blog = blog;
    })
    .catch(error => console.error('Error fetching blog details:', error));

// Function to update the blog with edited data
function updateBlog() {
    const updatedData = {
        title: document.getElementById('title').value,
        content: quill.root.innerHTML  
    };
    console.log(updatedData); 

    fetch(`https://mybrand-be-6rxz.onrender.com/api/blogs/${blogId}`, {
        method: 'PATCH',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(updatedData)
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

        // title.value = '';
        // rich.value = '';
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

  //check the authenticated user

function checkAuthentication() {
    const token = localStorage.getItem('token');
    if (!token) {
      // Redirect to login page if token is not present
      window.location.href = '/LogIn/Login.html';
    }
  }
  
  // Call checkAuthentication when the dashboard page loads
  window.addEventListener('DOMContentLoaded', () => {
    checkAuthentication();
  });

  // Function to logout
function logoutUser() {
    // Clear token from local storage
    localStorage.removeItem('token');
    // Redirect to login page
    window.location.href = '/LogIn/Login.html';
  }

