const form = document.getElementById("form")
const oneField = document.getElementById("myTitle")


const photoInput = document.getElementById("photo")
const rich = document.getElementById("summernote")

function mySave() {
    var myContent = document.getElementById("myTitle").value;
    var myPic = document.getElementById("photo").value;
    var areaText = document.getElementById("summernote").value;
    localStorage.setItem("myContent", myContent);
    localStorage.setItem("myPic",myPic);
    localStorage.setItem("areaText",areaText);

  }
  function del(){
    localStorage.clear();
}
form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
})

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

function validateInputs(){
    const oneTitle = oneField.value.trim();
    const richText = rich.value.trim();

    if(oneTitle === ''){
        verError(oneField, 'Title field is required!');
    } else if(oneTitle < 8){
        verError(oneField, 'username must not be less than 8 character')
    }
    else{
        verPass(oneField);
    }
    // to Check if a file is selected
    if (photoInput.files.length === 0) {
        // errorMessage.textContent = "Please select a photo!";
        verError(photoInput, 'Please select a photo.')
    }
    
    // Check if the selected file is an image
    // var file = photoInput.files[0];
    // if (!file.type.match('image.*')) {
    //     // errorMessage.textContent = "Please select an image file.";
    //     verError(photoInput, 'Please select an image file!')
    // }
    if(richText === ''){
        verError(rich, 'Please fill it well.')
    }else{
        verPass(rich)
    }

}