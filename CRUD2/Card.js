function retrieve() {
    var myBlogs = [];
    var allBlogs = localStorage.getItem("allBlog");
    var thePic = localStorage.getItem("theImg");
    myBlogs = allBlogs ? JSON.parse(allBlogs) : [];
    var container = document.getElementById('all');
    // let house = document.getElementById('single');
    myBlogs.forEach(function (myBlog) {
        var card = document.createElement("div");
        card.innerHTML = "\n        <div class=\"cont_port_1\" id=\"single\">\n            <img id=\"insertImg\" src=\"\" class=\"cont-pic-1\">\n            <h1 class=\"cont-title-1\">".concat(myBlog.myContent, "</h1>\n            <p class=\"cont-desc-1\">").concat(myBlog.areaText, "</p>\n            <div id=\"only-btn\">\n                <button class=\"cont-btn-1 edit-btn\"><i class=\"fa-solid fa-pen\"></i></button>\n                <button class=\"cont-btn-2 delete-btn\"><i class=\"fa-solid fa-trash-can\"></i></button>\n            </div>\n        </div>");
        document.addEventListener("DOMContentLoaded", function () {
            var _a;
            var getImageUrl = localStorage.getItem("imagePath");
            if (getImageUrl) {
                (_a = document.querySelector('#insertImg')) === null || _a === void 0 ? void 0 : _a.setAttribute("src", getImageUrl);
            }
        });
        var editBtn = card.querySelector('.edit-btn');
        editBtn === null || editBtn === void 0 ? void 0 : editBtn.addEventListener('click', function () {
            editBlog(myBlog.id);
        });
        var deleteBtn = card.querySelector('.delete-btn');
        deleteBtn === null || deleteBtn === void 0 ? void 0 : deleteBtn.addEventListener('click', function () {
            deleteBlog(myBlog.id);
            card.remove();
        });
        container === null || container === void 0 ? void 0 : container.appendChild(card);
    });
}
function deleteBlog(blogId) {
    var myBlogs = [];
    var allBlogs = localStorage.getItem("allBlog");
    myBlogs = allBlogs ? JSON.parse(allBlogs) : [];
    var index = myBlogs.findIndex(function (blog) { return blog.id === blogId; });
    if (index !== -1) {
        myBlogs.splice(index, 1);
        localStorage.setItem("allBlog", JSON.stringify(myBlogs));
    }
}
function editBlog(blogId) {
    // Find the blog entry with the specified id
    var myBlogs = [];
    var allBlogs = localStorage.getItem("allBlog");
    myBlogs = allBlogs ? JSON.parse(allBlogs) : [];
    var blogToEdit = myBlogs.find(function (blog) { return blog.id === blogId; });
    if (blogToEdit) {
        // Encode the blog content to make it URL-safe
        var encodedContent = encodeURIComponent(JSON.stringify(blogToEdit));
        // Navigate to the edit page with the content as URL parameters
        window.location.href = "/CRUD/dashboard.html?content=".concat(encodedContent);
    }
    else {
        console.error("Blog not found:", blogId);
    }
}
retrieve();
