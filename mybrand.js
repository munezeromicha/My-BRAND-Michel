fetch('https://mybrand-be-6rxz.onrender.com/api/blogs')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(blogs => {
        const blogsContainer = document.getElementById('Blogs');
        blogs.forEach(async blog => {
            const blogElement = document.createElement('div');
            blogElement.setAttribute('key', blog._id);
            blogElement.className = 'cont-card'; 
            
            const truncatedContent = blog.content.length > 100 ? blog.content.substring(0, 100) + '...' : blog.content;
            
            // Fetch comments for the current blog
            const commentsResponse = await fetch(`https://mybrand-be-6rxz.onrender.com/api/blogs/${blog._id}/comments`);
            const commentsData = await commentsResponse.json();
            const commentCount = commentsData.length; // Count the number of comments
            
            blogElement.innerHTML = `
            
                <img src="${blog.image}" alt="img-box6" class="img-box6">
                <p class="cont-box6-p">
                    <button class="like-btn" ${hasLikedBlog(blog._id) ? 'disabled' : ''}><i class="fa-solid fa-heart" id="like"></i><span class="singleLike">${blog.like}</span></button>
                    
                    <span id="icon-comment"><i class="fa-solid fa-comment" id="comment"></i><p id="singleComment">${commentCount} comments</p></span>   
                </p>
                <h2>${blog.title}</h2>
                <p class="cont-desc-p">${truncatedContent}</p>
                <span class="a-box6">Read more &nbsp; 
                    <i class="fa-solid fa-arrow-right"></i>
                </span>
            `;
            blogsContainer.appendChild(blogElement);

            const likeButton = blogElement.querySelector(".like-btn");
            const likeCountElement = blogElement.querySelector(".singleLike");

            likeButton.addEventListener("click", async () => {
                const blogId = blog._id;
                try {
                    const response = await fetch(`https://mybrand-be-6rxz.onrender.com/api/blogs/${blogId}/likes`, {
                        method: "POST"
                    });
                    if (!response.ok) {
                        throw new Error("Failed to like the blog");
                    }
                    const data = await response.json();
                    // Update the like count on the UI
                    likeCountElement.textContent = data.likes;
                    // Disable the like button after clicking
                    likeButton.disabled = true;
                    // Store the liked blog in local storage
                    storeLikedBlog(blog._id);
                } catch (error) {
                    console.error("Error liking the blog:", error);
                }
            });

            // Adding event listener to show full content
            const readMoreLinks = blogElement.querySelectorAll(".a-box6");
            readMoreLinks.forEach((link) => {
                link.addEventListener("click", () => {
                    const id = blogElement.getAttribute("key");
                    window.location.href = `/Single-Blog/Blog.html?id=${id}`;
                });
            });
        });


        // document.addEventListener("DOMContentLoaded", function() {
        //     // Simulate fetching data from the database (Replace setTimeout with your actual fetching function)
        //     setTimeout(function() {
        //       // Hide the loader and show the content
        //       document.querySelector('.content').style.display = 'none';
        //       document.querySelector('.content').style.display = 'block';
        //     }, 3000); // Adjust the delay as needed
        //   });

    })
    .catch(error => console.error('Error fetching blogs:', error));

function hasLikedBlog(blogId) {
    const likedBlogs = JSON.parse(localStorage.getItem("likedBlogs")) || [];
    return likedBlogs.includes(blogId);
}

function storeLikedBlog(blogId) {
    const likedBlogs = JSON.parse(localStorage.getItem("likedBlogs")) || [];
    likedBlogs.push(blogId);
    localStorage.setItem("likedBlogs", JSON.stringify(likedBlogs));
}

var form = document.getElementById('form');
var userName = document.getElementById('username');
var userEmail = document.getElementById('email');
var userMessage = document.getElementById('message');

if (form && userName && userEmail && userMessage) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        validateInputs();
    });
}

function validateInputs() {
    var userValue = userName.value.trim();
    var emailValue = userEmail.value.trim();
    var messageValue = userMessage.value.trim();

    if (userValue === '') {
        verError(userName, 'Name field is required!');
    } else if (userValue.length < 8) {
        verError(userName, 'Username must be at least 8 characters long');
    } else {
        if (emailValue === '') {
            verError(userEmail, 'Email field is required!');
        } else if (!checkEmail(emailValue)) {
            verError(userEmail, 'Enter a valid email!');
        } else {
            if (messageValue === '') {
                verError(userMessage, 'Message field is required');
            } else {
                const data = {
                    name: userValue,
                    email: emailValue,
                    message: messageValue
                };

                fetch('https://mybrand-be-6rxz.onrender.com/api/query', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                })
                .then(response => {
                    if (response.ok) {
                        console.error("Query created successfully");
                        showToast("Query created successfully");

                        userName.value = '';
                        userEmail.value = '';
                        userMessage.value = '';
                    } else {
                        console.log("Creating a query failed");
                        // showToast("Creating a query failed");
                    }
                })
                .catch(error => {
                    console.error("Error:", error);
                    showToast("Error occurred");
                });
            }
        }
    }
}

function verError(element, message) {
    var errorControl = element.parentElement;
    var showError = errorControl.querySelector('.error');
    showError.innerText = message;
    errorControl.classList.add('error');
    errorControl.classList.remove('success');
}

function verPass(element) {
    var errorControl = element.parentElement;
    var showError = errorControl.querySelector('.error');
    showError.innerText = '';
    errorControl.classList.add('success');
    errorControl.classList.remove('error');
}

function checkEmail(email) {
    var sign = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return sign.test(String(email).toLowerCase());
}

function showToast(message) {
    Toastify({
        text: message,
        duration: 3000,
        gravity: "top",
        position: "right",
    }).showToast();
}

//Humberger
function toggleMenu() {
    // alert("I am clicked!");
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}
function closeMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.remove('active');
}

// loader


  