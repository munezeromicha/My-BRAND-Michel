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






function autoSlide() {
    const container = document.querySelector('.myBlog');
    const cards = document.querySelectorAll('.myCard');
    const firstCard = cards[0];
    const cardWidth = firstCard.offsetWidth + parseInt(window.getComputedStyle(firstCard).marginRight);
    
    // Clone the first card and append it to the end
    container.appendChild(firstCard.cloneNode(true));
    
    let position = 0;
    
    // Slide cards to the left
    function slideLeft() {
      position -= cardWidth;
      container.style.transform = `translateX(${position}px)`;
      container.style.transition = 'transform 1s ease-in-out';
      
      // Reset position and transition when last card is reached
      if (position <= -container.scrollWidth + cardWidth) {
        setTimeout(() => {
          position = 0;
          container.style.transform = `translateX(${position}px)`;
          container.style.transition = 'none';
        }, 1000);
      }
    }
    
    // Automatically slide cards every 3 seconds
    setInterval(slideLeft, 5000);
  }
  
  // Call autoSlide function when the page is loaded
  window.addEventListener('load', autoSlide);






// this the end of slide function

// The beggining of form validation

const form = document.getElementById('form')
var userName = document.getElementById('inputOne')
const email = document.getElementById('in_2')
const locate = document.getElementById('in_3')
const sub = document.getElementById('in_4')
const mess = document.getElementById('in_5')
const pass = document.getElementById('pass_1')
const confirm = document.getElementById('pass_3')

form.addEventListener('submit', e =>{
    e.preventDefault();

    validateInputs();
});
    const verError = (Element,message) => {
        const errorControl = Element.parentElement;
        const showError = errorControl.querySelector('.error');

        showError.innerText = message;
        errorControl.classList.add('error')
        errorControl.classList.remove('success')
    }
    const verPass = Element =>{
        const errorControl = Element.parentElement;
        const showError = errorControl.querySelector('.error');

        showError.innerText = '';
        errorControl.classList.add('success')
        errorControl.classList.remove('error')
    }
    const checkEmail = email =>{
        const sign = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return sign.test(String(email).toLowerCase());
    }
function validateInputs(){
    const fullName = userName.value.trim();
    const inEmail = email.value.trim();
    const oneLocate = locate.value.trim();
    const subJect = sub.value.trim();
    const messValue = mess.value.trim();

    if(fullName === ''){
        verError(userName, 'Name field is required!');
    } else if(fullName < 8){
        verError(userName, 'username must not be less than 8 character')
    }
    else{
        verPass(userName);
    }

    if(inEmail ===''){
        verError(email, 'Email field is Required!');
    }
    else if(!checkEmail(inEmail)){
        verError(email, 'Enter the valid email!');
    }
    else{
        verPass(email)
    }

    if(oneLocate === ''){
        verError(locate, 'Location field is required!');
    }
    else{
        verPass(locate);
    }

    if(subJect === ''){
        verError(sub, 'Subject field is required!')
    }
    else{
        verPass(sub)
    }

    if(messValue === ''){
        verError(mess, 'Message field is required');
    }
    else{
        verPass(mess);
    }

}

// the end of form validation