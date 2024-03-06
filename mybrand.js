// the beggining of slide function

// function toggleMenu() {
//     // alert("I am clicked!");
//     const menu = document.querySelector('.menu');
//     menu.classList.toggle('active');
// }
// function closeMenu() {
//     const menu = document.querySelector('.menu');
//     menu.classList.remove('active');
// }

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
// var userName = document.getElementById('inputOne')
// const email = document.getElementById('in_2')
// const locate = document.getElementById('in_3')
// const sub = document.getElementById('in_4')
// const mess = document.getElementById('in_5')
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
//     const fullName = userName.value.trim();
//     const inEmail = email.value.trim();
//     const oneLocate = locate.value.trim();
//     const subJect = sub.value.trim();
//     const messValue = mess.value.trim();

//     if(fullName === ''){
//         verError(userName, 'Name field is required!');
//     } else if(fullName < 8){
//         verError(userName, 'username must not be less than 8 character')
//     }
//     else{
//         verPass(userName);
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
            console.log(blog._id);
            const blogElement = document.createElement('div');
            blogElement.innerHTML = `
                <div class="myCard" key=${blog._id}>
                    <img src="${blog.image}" alt="img-box6" class="img-box6">
                    <p class="cont-box6-p">22 Oct, 2020 <br> <br>
                        <i class="fa-regular fa-thumbs-up"> 4k</i> &nbsp;
                        <i class="fa-solid fa-comment"></i> 246 Comments &nbsp;
                    </p>
                    <h2>${blog.title}</h2>
                    <p class="cont-desc-p">${blog.content}</p>
                    <div class="a-box6">visit Site &nbsp; <i
                        class="fa-solid fa-arrow-right"></i></div>
                </div>
            `;
            blogsContainer.appendChild(blogElement);

            const singleBlog = document.querySelectorAll(".a-box6");
            singleBlog .forEach((oneBlog) => {
            oneBlog.addEventListener("click", (e) => {
        console.log("Done");
        const id = e.target.closest(".myCard").getAttribute("key");
        window.location.href = `/Single-Blog/Blog.html?id=${id}`;
      });
        });
        
    })
})
    .catch(error => console.error('Error fetching blogs:', error));



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



