var form = document.getElementById("form");
var title = document.getElementById("myTitle");
var photoInput = document.getElementById("photo");
var rich = document.getElementById("summernote");
// function mySave() {
//     var allBlog = JSON.parse(localStorage.getItem("allBlog")) || [];
//     var thePic = JSON.parse(localStorage.getItem("thePic")) || [];
//     var result = '';
//     var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     var donChange = characters.length;
//     for (var i = 0; i < 5; i++) {
//         result += characters.charAt(Math.floor(Math.random() * donChange));
//     }
//     if (photoInput) {
//         photoInput.addEventListener("change", function () {
//             var reader = new FileReader();
//             reader.addEventListener("load", function () {
//                 var photoObject = {
//                     imagePath: reader.result
//                 };
//                 thePic.push(photoObject);
//                 localStorage.setItem("thePic", JSON.stringify(thePic));
//             });
//             reader.readAsDataURL(this.files[0]);
//         });
//     }
//     if (title && rich) {
//         var newBlog = {
//             id: result,
//             myContent: title.value,
//             myPic: '',
//             areaText: rich.value
//         };
//         allBlog.push(newBlog);
//         localStorage.setItem("allBlog", JSON.stringify(allBlog));
//     }
// }
if (form) {
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

const check = async(values)=>{
    const res= await fetch('https://mybrand-be-6rxz.onrender.com/api/blogs',{
        method:'POST',
        body:JSON.stringify(values),
        headers:{'Content-Type':'application/json'} 
     })

     const data = await res.json();
     console.log(data);

}

function validateInputs() {

    if (!title || !photoInput || !rich)
        return;

    var oneTitle = title.value.trim();
    var richText = rich.value.trim()
    var photo = photoInput.value;


    if (oneTitle === '') {
        verError(title, 'Please fill it well.');
    }
    else {
        // verPass(title);
        if (photoInput.files && photoInput.files.length === 0) {
            verError(photoInput, 'Please select a photo.');
        }else{
            if (richText === '') {
                verError(rich, 'Please fill it well.');
            }
            else {
                // verPass(rich);
                const data = {
                    title: oneTitle,
                    content: richText,
                    image: photo
                }
                check(data);
            }
        }
    }


}
