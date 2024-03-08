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
                            <i class="fa-solid fa-circle-user" id="av-1"></i>
                            <span class="text-1">
                                <p class="nom-1">${comment.name}</p>
                                <h3>${comment.email}</h3>
                                <p>${comment.message}</p>
                                <span class="sec-1">
                                    <a href="#" id="anc-1">Like</a> .
                                    <a href="#" id="anc-1">Reply</a> . 23h
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
                    
                        <h1 id="text-2">Total Likes</h1>
                        <p id="totalLikes">${totalLikes} <i class="fa-solid fa-thumbs-up"></i></p>
                `;
                const blogsContainer = document.getElementById('simple3');
                blogsContainer.appendChild(blogElement);
            })
            .catch(error => console.error('Error fetching blogs:', error));
        