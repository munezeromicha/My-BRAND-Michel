// document.addEventListener("DOMContentLoaded", function() {

//     const cardContainer = document.getElementById("content_1");

//     // Function to create a card
//     function createCard(id, data) {
//       const card = document.createElement("div");
//       card.classList.add("card");
//       card.dataset.id = id; // Set data-id attribute for identification
//       card.innerHTML = `
//         <span>${data}</span>
//         <button class="edit-btn">Edit</button>
//         <button class="delete-btn">Delete</button>
//       `;
//       cardContainer.appendChild(card);
//     }

//     // Event listener for form submission
//     dataForm.addEventListener("submit", function(event) {
//       event.preventDefault(); // Prevent default form submission

//       const inputData = dataInput.value.trim();
//       if (inputData !== "") {
//         // Save data to local storage
//         const id = Date.now(); // Generate a unique ID
//         localStorage.setItem(id, inputData);

//         // Create a card with the entered data
//         createCard(id, inputData);

//         // Clear input field
//         dataInput.value = "";
//       } else {
//         alert("Please enter some data.");
//       }
//     });

//     // Function to handle edit action
//     function editCard(card) {
//       const span = card.querySelector("span");
//       const editedData = prompt("Enter the new data:", span.textContent);
//       if (editedData !== null) {
//         const id = card.dataset.id;
//         localStorage.setItem(id, editedData);
//         span.textContent = editedData;
//       }
//     }

//     // Function to handle delete action
//     function deleteCard(card) {
//       const id = card.dataset.id;
//       localStorage.removeItem(id);
//       card.remove();
//     }

//     // Event delegation for edit and delete buttons
//     cardContainer.addEventListener("click", function(event) {
//       const target = event.target;
//       if (target.classList.contains("edit-btn")) {
//         const card = target.closest(".card");
//         editCard(card);
//       } else if (target.classList.contains("delete-btn")) {
//         const card = target.closest(".card");
//         deleteCard(card);
//       }
//     });

//     // Display existing data from local storage
//     for (let i = 0; i < localStorage.length; i++) {
//       const id = localStorage.key(i);
//       const data = localStorage.getItem(id);
//       createCard(id, data);
//     }
//   });

function retrieve() {
  let myBlogs = [];
  let allBlogs = localStorage.getItem("allBlog");
  let thePic = localStorage.getItem("theImg");
  myBlogs = allBlogs ? JSON.parse(allBlogs) : [];

  let container = document.getElementById('all');
  // let house = document.getElementById('single');


  myBlogs.forEach(myBlog => {
    const card = document.createElement("div")
    card.innerHTML = `
    
    <div class="cont_port_1" id="single">
    <img id="insertImg" src=""
        class="cont-pic-1">
    <h1 class="cont-title-1">${myBlog.myContent}</h1>
    <p class="cont-desc-1">${myBlog.areaText}</p>
        <div id="only-btn">
            <button class="cont-btn-1 edit-btn"><i class="fa-solid fa-pen"></i></button>
            <button class="cont-btn-2 delete-btn"><i class="fa-solid fa-trash-can"></i></button>
        </div>
      </div>
    `;

    document.addEventListener("DOMContentLoaded", () => {
      const getImageUrl = localStorage.getItem("imagePath");

      if(getImageUrl){
        document.querySelector('#insertImg').setAttribute("src", getImageUrl);
      }
    });

    const editBtn = card.querySelector('.edit-btn');
    editBtn.addEventListener('click', () => {
      editBlog(myBlog.id); 
    });

    const deleteBtn = card.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
      
      deleteBlog(myBlog.id); 
      card.remove(); 
    });


    container.appendChild(card);
  });

}

function deleteBlog(blogId) {
  let myBlogs = [];
  let allBlogs = localStorage.getItem("allBlog");
  myBlogs = allBlogs ? JSON.parse(allBlogs) : [];

  const index = myBlogs.findIndex(blog => blog.id === blogId);
  
  if (index !== -1) {

    myBlogs.splice(index, 1);

    localStorage.setItem("allBlog", JSON.stringify(myBlogs));
  }
}

function editBlog(blogId) {
  // Find the blog entry with the specified id
  let myBlogs = [];
  let allBlogs = localStorage.getItem("allBlog");
  myBlogs = allBlogs ? JSON.parse(allBlogs) : [];

  const blogToEdit = myBlogs.find(blog => blog.id === blogId);

  if (blogToEdit) {
    // Encode the blog content to make it URL-safe
    const encodedContent = encodeURIComponent(JSON.stringify(blogToEdit));

    // Navigate to the edit page with the content as URL parameters
    window.location.href = `/CRUD/dashboard.html?content=${encodedContent}`;
  } else {
    console.error("Blog not found:", blogId);
  }
}

retrieve();