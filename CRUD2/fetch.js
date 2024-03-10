fetch('https://mybrand-be-6rxz.onrender.com/api/blogs')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(blogs => {
        const blogsContainer = document.getElementById('Blogs');
        blogs.forEach(blog => {
            const blogElement = document.createElement('div');
            blogElement.className = 'cont-card';
            blogElement.setAttribute('data-blog-id', blog._id); 

            const truncatedContent = blog.content.length > 100 ? blog.content.substring(0, 100) + '...' : blog.content;
            blogElement.innerHTML = `
                <img src="${blog.image}" alt="img-box6" class="img-box6">
                <p class="cont-box6-p">
                <div class="like-btn"><i class="fa-regular fa-thumbs-up" id="likes"></i>&nbsp;<p class="singleLike">${blog.like}</p></div>
                    <h3>${blog.updatedAt}</h3>
                </p>
                <h2 id="titleValue">${blog.title}</h2>
                <p class="cont-desc-p">${truncatedContent}</p>
                <button class="cont-btn-1 edit-btn" data-blog-id="${blog._id}"><i class="fa-solid fa-pen"></i></button>
                <button class="cont-btn-2 delete-btn" data-blog-id="${blog._id}"><i class="fa-solid fa-trash-can"></i></button>
            `;
            
            blogsContainer.appendChild(blogElement);
        });

        const deleteButtons = document.querySelectorAll('.delete-btn');
        deleteButtons.forEach(button => {
            button.addEventListener('click', () => {
                const blogId = button.getAttribute('data-blog-id');
                deleteBlog(blogId);
            });
        });

        const editButtons = document.querySelectorAll('.edit-btn');
        editButtons.forEach(button => {
            button.addEventListener('click', () => {
                const blogId = button.getAttribute('data-blog-id');
                window.location.href = `/CRUD/dashboard.html?id=${blogId}`; // Redirect to the edit page with the blogId as a query parameter
            });
        });
    })
    .catch(error => console.error('Error fetching blogs:', error));

// Function to delete a blog by its ID
function deleteBlog(blogId) {
    // Confirm with the user before deleting the blog
    const confirmation = confirm("Are you sure you want to delete this blog?");
    if (!confirmation) {
        return; // If user cancels, do nothing
    }

    fetch(`https://mybrand-be-6rxz.onrender.com/api/blogs/${blogId}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        showToast("Blog deleted successfully!");
    })
    .catch(error => console.error("Error deleting blog:", error));
}

// Function to display toast notification
function showToast(message) {
    Toastify({
        text: message,
        duration: 4000,
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