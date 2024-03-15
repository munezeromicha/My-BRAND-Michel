const url = 'https://mybrand-be-6rxz.onrender.com'

const currentUrl = new URL(window.location.href);
const searchParams = new URLSearchParams(currentUrl.search);
const blogId = searchParams.get("id");
// console.log("blogId", blogId);

if (blogId) {
    fetch('https://mybrand-be-6rxz.onrender.com' + `/api/blogs/${blogId}/comments`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const commentCount = data.length;

            const blogElement = document.createElement('div');
            blogElement.innerHTML = `
                <h2 id="text-comment">Total Comments</h2>
                <p id="text-value">${commentCount} <i class="fa-solid fa-comments"></i></i></p>
            `;
            const blogsContainer = document.querySelector('.container');
            blogsContainer.appendChild(blogElement);
        })
        .catch(error => console.error('Error fetching comments:', error));
} else {
    console.error('Blog ID not found in URL');
}


const blogs = document.querySelector(".container");
// Fetch blog details
fetch('https://mybrand-be-6rxz.onrender.com' + `/api/blogs/${blogId}`)
    .then((res) => res.json())
    .then((blog) => {
        blogs.innerHTML = `
    <div class="part-1">
    <h1 class="gen-1"><span id="single-1">${blog.title}</h1>
    <p class="sub-part-1">
    <p class="dec-1">${blog.createdAt}</p>
    <img src="${blog.image}" alt="pic-1" class="img-1">

</div>
<hr class="line-1">
<div class="line-2">
    <div class="sub-over-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="82" viewBox="0 0 70 82" fill="none">
            <g clip-path="url(#clip0_59_613)">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M34.9997 6.83337C51.1085 6.83337 64.1664 22.1298 64.1664 41C64.1767 48.8853 61.8488 56.5301 57.5805 62.6275L57.6389 62.7027L57.2539 63.0854C54.5187 66.8752 51.1102 69.9199 47.2664 72.0066C43.4226 74.0933 39.2362 75.1718 34.9997 75.1667C26.3955 75.1667 18.6664 70.8036 13.3289 63.8678L12.7455 63.082L12.3605 62.7061L12.4189 62.6241C8.15108 56.5277 5.82319 48.8842 5.83304 41C5.83304 22.1298 18.891 6.83337 34.9997 6.83337ZM34.9997 58.0834C29.5747 58.0834 24.6718 60.106 21.0201 62.8872C25.0522 66.4312 29.9589 68.3428 34.9997 68.3334C40.0406 68.3428 44.9472 66.4312 48.9793 62.8872C44.8066 59.755 39.9556 58.088 34.9997 58.0834ZM34.9997 13.6667C30.6087 13.6666 26.3068 15.1178 22.5885 17.8537C18.8701 20.5895 15.8862 24.4989 13.9798 29.1325C12.0733 33.7661 11.3216 38.9358 11.8112 44.0475C12.3007 49.1591 14.0116 54.0052 16.7472 58.0287C21.4751 54.0551 27.9268 51.25 34.9997 51.25C42.0726 51.25 48.5243 54.0551 53.2522 58.0287C55.9878 54.0052 57.6987 49.1591 58.1882 44.0475C58.6778 38.9358 57.9261 33.7661 56.0197 29.1325C54.1132 24.4989 51.1293 20.5895 47.4109 17.8537C43.6926 15.1178 39.3907 13.6666 34.9997 13.6667ZM34.9997 20.5C38.0939 20.5 41.0614 21.9399 43.2493 24.5029C45.4372 27.0659 46.6664 30.5421 46.6664 34.1667C46.6664 37.7913 45.4372 41.2675 43.2493 43.8305C41.0614 46.3935 38.0939 47.8334 34.9997 47.8334C31.9055 47.8334 28.9381 46.3935 26.7501 43.8305C24.5622 41.2675 23.333 37.7913 23.333 34.1667C23.333 30.5421 24.5622 27.0659 26.7501 24.5029C28.9381 21.9399 31.9055 20.5 34.9997 20.5ZM34.9997 27.3334C33.4526 27.3334 31.9689 28.0533 30.8749 29.3348C29.781 30.6163 29.1664 32.3544 29.1664 34.1667C29.1664 35.979 29.781 37.7171 30.8749 38.9986C31.9689 40.2801 33.4526 41 34.9997 41C36.5468 41 38.0305 40.2801 39.1245 38.9986C40.2185 37.7171 40.833 35.979 40.833 34.1667C40.833 32.3544 40.2185 30.6163 39.1245 29.3348C38.0305 28.0533 36.5468 27.3334 34.9997 27.3334Z"
                    fill="#5E3BEE" />
            </g>
            <defs>
                <clipPath id="clip0_59_613">
                    <rect width="70" height="82" fill="white" />
                </clipPath>
            </defs>
        </svg>
        <span class="sub-text-1">
            <h1>Michael</h1>
            <p>${blog.createdAt}</p>
        </span>

    </div>
    <p class="desc-2"> ${blog.content} <br><br>

        Tkanks for reading. </br>
        Michael</p>
        <h2 id="text-like">Total likes</h2> <div id="icon-like"> ${blog.like} <i class="fa-solid fa-thumbs-up"></i>
        </div>
    `;

        // Fetch comments
        fetch('https://mybrand-be-6rxz.onrender.com' + `/api/blogs/${blogId}/comments`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                // const comments = data.comments || [];

                const commentBox = document.getElementById("comment");
                // console.log(data)
                data.map((comment) => {

                    const commentElement = document.createElement("div");
                    commentElement.innerHTML = `
            
          <div class="com-2">
              <i class="fa-solid fa-circle-user" id="av-1"></i>
              <span class="text-1">
                  <p class="nom-1">${comment.name}</p>
                  <h3 id="email">${comment.email}</h3>
                  <p>${comment.idea}</p>
                  <span class="sec-1">

                      <a href="#" id="anc-1">Reply</a>
                  </span>
              </span>
          </div>
                 
              `;
                    //   console.log(commentBox)
                    commentBox.appendChild(commentElement);
                });
            })
            .catch((error) => console.error("Error fetching comments:", error));

    }).catch((error) => console.error("Error fetching blog:", error));


var form = document.getElementById('form');
var userName = document.getElementById('name_1');
var email = document.getElementById('email_1');
var locate = document.getElementById('mess');
if (form && userName && email && locate) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        validateInputs();
    });
}
var verError = function (Element, message) {
    var errorControl = Element.parentElement;
    var showError = errorControl === null || errorControl === void 0 ? void 0 : errorControl.querySelector('.error');
    if (showError) {
        showError.innerText = message;
        errorControl.classList.add('error');
        errorControl.classList.remove('success');
    }
};
var verPass = function (Element) {
    var errorControl = Element.parentElement;
    var showError = errorControl === null || errorControl === void 0 ? void 0 : errorControl.querySelector('.error');
    if (showError) {
        showError.innerText = '';
        errorControl.classList.add('success');
        errorControl.classList.remove('error');
    }
};
var checkEmail = function (email) {
    var sign = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return sign.test(String(email).toLowerCase());
};



function validateInputs() {
    if (!userName || !email || !locate)
        return;
    var fullName = userName.value.trim();
    var inEmail = email.value.trim();
    var oneLocate = locate.value.trim();
    if (fullName === '') {
        verError(userName, 'Fullname field is required!');
    }
    else if (fullName.length < 8) {
        verError(userName, 'Username must not be less than 8 characters');
    }
    else {
        // verPass(userName);
        if (inEmail === '') {
            verError(email, 'Email field is Required!');
        }
        else if (!checkEmail(inEmail)) {
            verError(email, 'Enter the valid email!');
        }
        else {
            // verPass(email);
            if (oneLocate === '') {
                verError(locate, 'Comment field is required!');
            }
            else {
                // verPass(locate);
                const data = {
                    name: fullName,
                    email: inEmail,
                    idea: oneLocate
                }

                function loginUser(data) {
                    // Assuming you're using fetch for API calls
                    fetch(`https://mybrand-be-6rxz.onrender.com/api/blogs/${blogId}/comments`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(data),
                    })
                        .then(response => {
                            if (response.ok) {
                                // comment created successfully
                                console.log("comments created successfully");
                                showToast("comments created successfully");
                                location.reload();
                                userName.value = '';
                                email.value = '';
                                locate.value = '';
                            } else {
                                // creating a comment
                                console.error("creating a comment failed");
                                showToast("Creating a comment failed");
                            }
                        })
                        .catch(error => {
                            console.error("Error:", error);
                            showToast("Error occurred");
                        });
                }

                // Function to show toast notification
                function showToast(message) {
                    Toastify({
                        text: message,
                        duration: 3000,
                        gravity: "top",
                        position: "right",
                    }).showToast();
                }

                loginUser(data);
            }
        }
    }


}


