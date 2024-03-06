const form = document.getElementById("form")
const oneField = document.getElementById("myTitle")
const photoInput = document.getElementById("photo")
const rich = document.getElementById("summernote")




function mySave() {
    const allBlog = JSON.parse(localStorage.getItem("allBlog")) || [];
    const thePic = JSON.parse(localStorage.getItem("thePic")) || [];

    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const donChange = characters.length;
    for (let i = 0; i < 5; i++) {
        result += characters.charAt(Math.floor(Math.random() * donChange))
    }

    document.querySelector('#photo').addEventListener("change", function(){
      const reader = new FileReader();
      
      reader.addEventListener("load", () => {
          const photoObject = {
              imagePath: reader.result
          };
          thePic.push(photoObject);
          localStorage.setItem("thePic", JSON.stringify(thePic));
      });
      
      reader.readAsDataURL(this.files[0]);
  });
    // const myContent = document.getElementById("myTitle").value;
    // const myPic = document.getElementById("photo").value;
    // const areaText = document.getElementById("summernote").value;
    // localStorage.setItem("myContent", myContent);
    // localStorage.setItem("myPic",myPic);
    // localStorage.setItem("areaText",areaText);

    const newBlog = {
        id: result,
        myContent: oneField.value,
        myPic: '',
        areaText: rich.value
    }

    allBlog.push(newBlog);
    localStorage.setItem("allBlog", JSON.stringify(allBlog));


}




form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
})

const verError = (Element, message) => {
    const errorControl = Element.parentElement;
    const showError = errorControl.querySelector('.error');

    showError.innerText = message;
    errorControl.classList.add('error')
    errorControl.classList.remove('success')
}

const verPass = Element => {
    const errorControl = Element.parentElement;
    const showError = errorControl.querySelector('.error');

    showError.innerText = '';
    errorControl.classList.add('success')
    errorControl.classList.remove('error')
}

// document.addEventListener("DOMContentLoaded", function () {
//   e.preventDefault();
//     // const dataForm = document.getElementById("form");
//     const uniqueField = document.getElementById("myTitle");
//     // const cardContainer = document.getElementById("cardContainer");
//     // const richOne = document.getElementById("summernote");
//     const oneBad = document.getElementById("oneError");

//     function dispWarning() {
//         oneBad.style.display = 'block';
//     }
//     function hideWarning() {
//         oneBad.style.display = 'none';
//     }
//     uniqueField.addEventListener("input", function () {
//       e.preventDefault();
//         if (uniqueField.value.trim() === "") {
//             dispWarning();
//         } else {
//             hideWarning();
//         }

//     });



//     const holdTwo = document.getElementById("quickSub");
//     holdTwo.addEventListener("click", function () {
//       e.preventDefault();
//         if (uniqueField.value.trim() === "") {
//             dispWarning();
//         } else {
//             hideWarning();
//         }

//     });



// });

function validateInputs() {
    const oneTitle = oneField.value.trim();
    const richText = rich.value.trim();

    if (oneTitle === '') {
      verError(oneField, 'Please fill it well.')
  } else {
      verPass(oneField)
  }

    if (photoInput.files.length === 0) {
        // errorMessage.textContent = "Please select a photo!";
        verError(photoInput, 'Please select a photo.')
    }

    if (richText === '') {
        verError(rich, 'Please fill it well.')
    } else {
        verPass(rich)
    }

}