

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
            blogElement.setAttribute('key', blog._id);
            blogElement.className = 'cont-card'; 
            
            // Limiting content to a fixed size
            const truncatedContent = blog.content.length > 100 ? blog.content.substring(0, 100) + '...' : blog.content;

            blogElement.innerHTML = `
                <img src="${blog.image}" alt="img-box6" class="img-box6">
                <p class="cont-box6-p">
                    <button class="like-btn" ${hasLikedBlog(blog._id) ? 'disabled' : ''}><i class="fa-solid fa-heart" id="like"></i><span class="singleLike">${blog.like}</span></button>
                    
                    <span id="icon-comment"><i class="fa-solid fa-comment" id="comment"></i><p id="singleComment"> 246 Comments </p></span>   
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
    })
    .catch(error => console.error('Error fetching blogs:', error));

// Function to check if the user has already liked a specific blog
function hasLikedBlog(blogId) {
    const likedBlogs = JSON.parse(localStorage.getItem("likedBlogs")) || [];
    return likedBlogs.includes(blogId);
}

// Function to store the ID of the liked blog in local storage
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
            // verPass(username);
            if (emailValue === '') {
                verError(userEmail, 'Email field is required!');
            } else if (!checkEmail(emailValue)) {
                verError(userEmail, 'Enter a valid email!');
            } else {
                // verPass(email);
                if (messageValue === '') {
                    verError(userMessage, 'Message field is required');
                } else {
                    // verPass(message);
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


    


    // const blogContainer = document.getElementById("Blogs");
    // const fetchBlogs = async () => {
    //     try{
    //         const response = await fetch('https://mybrand-be-6rxz.onrender.com' + '/api/blogs');
    //         const data = await response.json();

    //         blogContainer.innerHTML = '';

    //         data.forEach( blog => {
    //             const blogElement = document.createElement('div');
    //             blogElement.classList.add('myCard');
    //             blogElement.innerHTML = `
                
    //             <span class="myCard">
    //             <img src="${blog.image}" alt="img-box6" class="img-box6">
    //                                 <p class="cont-box6-p">22 Oct, 2020 <br> <br>
    //                                     <i class="fa-regular fa-thumbs-up"> 4k</i> &nbsp;
    //                                     <i class="fa-solid fa-comment"></i> 246 Comments &nbsp;
    //                                 </p>
                                   
    //                                 <p class="cont-desc-p">${blog.content}</p>
    //                                 <a href="./Single-Blog/Blog.html" class="a-box6">visit Site &nbsp; <i
    //                                         class="fa-solid fa-arrow-right"></i></a>
            
    //                             </span>
    //             `
    //             blogContainer.appendChild(blogElement);
    //         });
    //     }catch(error){
    //     console.log(error);
    // }
    // };

    // fetchBlogs();
// the beggining of slide function

function toggleMenu() {
    // alert("I am clicked!");
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}
function closeMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.remove('active');
}

// function xScroll(horizontal){
//     const first = document.querySelector('.box6-over')
//     const second = document.querySelector('.cont-box6-1').offsetWidth;
//     const third = document.querySelector('')

//     if(horizontal == "next"){
//         first.scrollLeft += second + 10;
//     }
//     else if(horizontal == "prev"){
//         first.scrollLeft -= second + 10;
//     }
// }

// function autoSlide() {
//     const container = document.querySelector('.myBlog');
//     const cards = document.querySelectorAll('.myCard');
//     const firstCard = cards[0];
//     const cardWidth = firstCard.offsetWidth + parseInt(window.getComputedStyle(firstCard).marginRight);
    
//     // Clone the first card and append it to the end
//     container.appendChild(firstCard.cloneNode(true));
    
//     let position = 0;
    
//     // Slide cards to the left
//     function slideLeft() {
//       position -= cardWidth;
//       container.style.transform = `translateX(${position}px)`;
//       container.style.transition = 'transform 1s ease-in-out';
      
//       // Reset position and transition when last card is reached
//       if (position <= -container.scrollWidth + cardWidth) {
//         setTimeout(() => {
//           position = 0;
//           container.style.transform = `translateX(${position}px)`;
//           container.style.transition = 'none';
//         }, 1000);
//       }
//     }
    
//     // Automatically slide cards every 3 seconds
//     setInterval(slideLeft, 5000);
//   }
  
//   // Call autoSlide function when the page is loaded
//   window.addEventListener('load', autoSlide);


// this the end of slide function

// The beggining of form validation

// const form = document.getElementById('form')
// var username = document.getElementById('username')
// const email = document.getElementById('email')
// const locate = document.getElementById('in_3')
// const sub = document.getElementById('in_4')
// const mess = document.getElementById('message')
// const pass = document.getElementById('pass_1')
// const confirm = document.getElementById('pass_3')

// form.addEventListener('submit', e =>{
//     e.preventDefault();

//     validateInputs();
// });
//     const verError = (Element,message) => {
//         const errorControl = Element.parentElement;
//         const showError = errorControl.querySelector('.error');

//         showError.innerText = message;
//         errorControl.classList.add('error')
//         errorControl.classList.remove('success')
//     }
//     const verPass = Element =>{
//         const errorControl = Element.parentElement;
//         const showError = errorControl.querySelector('.error');

//         showError.innerText = '';
//         errorControl.classList.add('success')
//         errorControl.classList.remove('error')
//     }
//     const checkEmail = email =>{
//         const sign = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         return sign.test(String(email).toLowerCase());
//     }
// function validateInputs(){
//     const fullName = username.value.trim();
//     const inEmail = email.value.trim();
//     const oneLocate = locate.value.trim();
//     const subJect = sub.value.trim();
//     const messValue = mess.value.trim();

//     if(fullName === ''){
//         verError(username, 'Name field is required!');
//     } else if(fullName < 8){
//         verError(username, 'username must not be less than 8 character')
//     }
//     else{
//         verPass(username);
//     }

//     if(inEmail ===''){
//         verError(email, 'Email field is Required!');
//     }
//     else if(!checkEmail(inEmail)){
//         verError(email, 'Enter the valid email!');
//     }
//     else{
//         verPass(email)
//     }

//     if(oneLocate === ''){
//         verError(locate, 'Location field is required!');
//     }
//     else{
//         verPass(locate);
//     }

//     if(subJect === ''){
//         verError(sub, 'Subject field is required!')
//     }
//     else{
//         verPass(sub)
//     }

//     if(messValue === ''){
//         verError(mess, 'Message field is required');
//     }
//     else{
//         verPass(mess);
//     }

// }

// the end of form validation




// function retrieve() {
//     let myBlogs = [];
//     let allBlogs = "https://mybrand-be-6rxz.onrender.com/api/blogs";
//     let thePic = localStorage.getItem("theImg");
//     myBlogs = allBlogs ? JSON.parse(allBlogs) : [];
  
//     let container = document.getElementById('all');
//     // let house = document.getElementById('single');
  
  
//     myBlogs.forEach(myBlog => {
//       const card = document.createElement("div")
//       card.innerHTML = `
      
//       <div class="myCard">
//       <img src="./Pictures/benjamin-zanatta-WbkfJ2TmSug-unsplash.jpg" alt="" id="pic-1">
//       <div id="word-1">
//           <p class="cont-box6-p">22 Oct, 2020 <br> <br>
//               <i class="fa-regular fa-thumbs-up"> 4k</i> &nbsp;
//               <i class="fa-solid fa-comment"></i> 246 Comments &nbsp;

//           </p>
//       </div>
//       <div id="the-1">
//           <h1>${myBlog.myContent}</h1>
//       </div>
//       <div id="p-2">
//           <p>${myBlog.areaText}</p>
//       </div>
//       <div id="our-btn">
//           <button id="press-1"><a href="./Single-Blog/Blog.html" target="_blank" id="under">Visit</a></button>
//       </div>
//   </div>
//       `;
  
//       document.addEventListener("DOMContentLoaded", () => {
//         const getImageUrl = localStorage.getItem("imagePath");
  
//         if(getImageUrl){
//           document.querySelector('#insertImg').setAttribute("src", getImageUrl);
//         }
//       });
      
//       container.appendChild(card);
//     });
  
//   }
  
//   retrieve();


