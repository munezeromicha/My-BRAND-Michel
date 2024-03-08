
/* the beggining of form validation */

var form = document.getElementById('form');
var userName = document.getElementById('inputOne');
var email = document.getElementById('in_2');
var locate = document.getElementById('in_3');
var sub = document.getElementById('in_4');
var mess = document.getElementById('in_5');
if (form && userName && email && locate && sub && mess) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        validateInputs();
    });
}
var verError = function (element, message) {
    var errorControl = element.parentElement;
    var showError = errorControl === null || errorControl === void 0 ? void 0 : errorControl.querySelector('.error');
    if (showError) {
        showError.innerText = message;
        errorControl === null || errorControl === void 0 ? void 0 : errorControl.classList.add('error');
        errorControl === null || errorControl === void 0 ? void 0 : errorControl.classList.remove('success');
    }
};
var verPass = function (element) {
    var errorControl = element.parentElement;
    if (errorControl) {
        var showError = errorControl.querySelector('.error');
        if (showError) {
            showError.innerText = '';
            errorControl.classList.add('success');
            errorControl.classList.remove('error');
        }
    }
};
var checkEmail = function (email) {
    var sign = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return sign.test(String(email).toLowerCase());
};

// const check = async(values)=>{
//     const res= await fetch('https://mybrand-be-6rxz.onrender.com/api/query',{
//         method:'POST',
//         body:JSON.stringify(values),
//         headers:{'Content-Type':'application/json'} 
//      })

//      const data = await res.json();
//      console.log(data);

// }

// function validateInputs() {
//     if (!userName || !email || !locate || !sub || !mess)
//         return;
//     var fullName = userName.value.trim();
//     var inEmail = email.value.trim();
//     var oneLocate = locate.value.trim();
//     var subJect = sub.value.trim();
//     var messValue = mess.value.trim();
//     if (fullName === '') {
//         verError(userName, 'Name field is required!');
//     }
//     else if (fullName.length < 8) {
//         verError(userName, 'Username must not be less than 8 characters');
//     }
//     else {
//         // verPass(userName);
//         if (inEmail === '') {
//             verError(email, 'Email field is required!');
//         }
//         else if (!checkEmail(inEmail)) {
//             verError(email, 'Enter a valid email!');
//         }
//         else {
//             // verPass(email);
//             if (oneLocate === '') {
//                 verError(locate, 'Location field is required!');
//             }
//             else {
//                 // verPass(locate);
//                 if (subJect === '') {
//                     verError(sub, 'Subject field is required!');
//                 }
//                 else {
//                     // verPass(sub);
//                     if (messValue === '') {
//                         verError(mess, 'Message field is required');
//                     }
//                     else {
//                         // verPass(mess);
//                         const data = {
//                             name: fullName,
//                             email: inEmail,
//                             message: messValue
//                         }
//                         function loginUser(data) {
//                             // Assuming you're using fetch for API calls
//                             fetch(`https://mybrand-be-6rxz.onrender.com/api/query`, {
//                                 method: 'POST',
//                                 headers: {
//                                     'Content-Type': 'application/json',
//                                 },
//                                 body: JSON.stringify(data),
//                             })
//                                 .then(response => {
//                                     if (response.ok) {
//                                         // User created successfully
//                                         console.log("Query created successfully");
//                                         showToast("Query created successfully");
//                                     } else {
//                                         // creating a comment
//                                         console.error("creating a comment failed");
//                                         showToast("Creating a comment failed");
//                                     }
//                                 })
//                                 .catch(error => {
//                                     console.error("Error:", error);
//                                     showToast("Error occurred");
//                                 });
//                         }
        
//                         // Function to show toast notification
//                         function showToast(message) {
//                             Toastify({
//                                 text: message,
//                                 duration: 3000,
//                                 gravity: "top",
//                                 position: "right",
//                             }).showToast();
//                         }
        
//                         loginUser(data);
//                     }

//                 }
//             }
//         }
//     }




// }
/* the end of form validation */

/* the beggining of humberger menu */
function toggleMenu() {
    var menu = document.querySelector('.menu');
    if (menu) {
        menu.classList.toggle('active');
    }
}
function closeMenu() {
    var menu = document.querySelector('.menu');
    if (menu) {
        menu.classList.remove('active');
    }
}
/* the end of humberger menu */