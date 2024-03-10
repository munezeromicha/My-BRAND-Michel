fetch('https://mybrand-be-6rxz.onrender.com/api/query')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
                
            })
            .then(data => {
                console.log(data);
                const commentBox = document.getElementById("comment");
                console.log(commentBox)
                data.forEach(comment => {
                    
                    const commentElement = document.createElement("div");
                    commentElement.innerHTML = `
                        <div class="com-2">
                        <div id="two-comp">
                        <i class="fa-solid fa-circle-user" id="av-1"></i>
                        <p class="nom-1">${comment.name}</p>
                        </div>

                            <span class="text-1">
                                
                                <h3>${comment.email}</h3>
                                <p>${comment.message}</p>
                                <span class="sec-1">
                                    <a href="#" id="anc-1">Reply</a> .  <a href="#" id="anc-1">${comment.updatedAt}</a> . <button id="del-btn"> delete</button>
                                </span>
                            </span>
                        </div>
                    `;
                    commentBox.appendChild(commentElement);
                });
            })
            .catch(error => console.error("Error fetching queries:", error));


            fetch('https://mybrand-be-6rxz.onrender.com/api/blogs')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(blogs => {
                // Assuming you only want to display the like count once, outside the loop
                const totalLikes = blogs.reduce((total, blog) => total + blog.like, 0);
                
                const blogElement = document.createElement('div');
                blogElement.innerHTML = `
                    
                        <h1 id="text-2">Likes</h1>
                        <p id="totalLikes">${totalLikes} <i class="fa-solid fa-thumbs-up"></i></p>
                `;
                const blogsContainer = document.getElementById('simple3');
                blogsContainer.appendChild(blogElement);
            })
            .catch(error => console.error('Error fetching blogs:', error));
        

            fetch('https://mybrand-be-6rxz.onrender.com/api/query')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const queryCount = data.length;
                
                const blogElement = document.createElement('div');
                blogElement.innerHTML = `
                    
                <p id="first-p">Total Queries</p>
                <h1>${queryCount}</h1>
                `;
                const blogsContainer = document.getElementById('num-1');
                blogsContainer.appendChild(blogElement);
            })
            .catch(error => console.error('Error fetching blogs:', error));


            fetch('https://mybrand-be-6rxz.onrender.com/api/blogs')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const blogCount = data.length;
                
                const blogElement = document.createElement('div');
                blogElement.innerHTML = `
                    
                <h1 id="text-blog">Blogs</h1>
                <p id="text-p">${blogCount}<i class="fa-solid fa-blog"></i></p>
                `;
                const blogsContainer = document.getElementById('simple-1');
                blogsContainer.appendChild(blogElement);
            })
            .catch(error => console.error('Error fetching blogs:', error));


            document.getElementById('log-1').addEventListener('click', function() {
                // Remove the token from local storage
                localStorage.removeItem('token');
                
                // Redirect to another page
                window.location.href = '/Login/Login.html';
            });

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
    window.location.href = '/login.html';
  }
            