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
            console.log(blog);
            const blogElement = document.createElement('div');
            blogElement.innerHTML = `
                <span class="myCard">
                    <img src="${blog.image}" alt="img-box6" class="img-box6">
                    <p class="cont-box6-p">22 Oct, 2020 <br> <br>
                        <i class="fa-regular fa-thumbs-up"> 4k</i> &nbsp;
                        <i class="fa-solid fa-comment"></i> 246 Comments &nbsp;
                    </p>
                    <h2>${blog.title}</h2>
                    <p class="cont-desc-p">${blog.content}</p>
                    <button class="cont-btn-1 edit-btn"><i class="fa-solid fa-pen"></i></button>
                    <button class="cont-btn-2 delete-btn"><i class="fa-solid fa-trash-can"></i></button>
                </span>
            `;
            
            blogsContainer.appendChild(blogElement);
        });
    })
    .catch(error => console.error('Error fetching blogs:', error));