function retrieve() {
    let myBlogs: any[] = [];
    let allBlogs = localStorage.getItem("allBlog");
    let thePic = localStorage.getItem("theImg");
    myBlogs = allBlogs ? JSON.parse(allBlogs) : [];

    let container = document.getElementById('all');
    // let house = document.getElementById('single');

    myBlogs.forEach(myBlog => {
        const card = document.createElement("div");
        card.innerHTML = `
        <div class="cont_port_1" id="single">
            <img id="insertImg" src="" class="cont-pic-1">
            <h1 class="cont-title-1">${myBlog.myContent}</h1>
            <p class="cont-desc-1">${myBlog.areaText}</p>
            <div id="only-btn">
                <button class="cont-btn-1 edit-btn"><i class="fa-solid fa-pen"></i></button>
                <button class="cont-btn-2 delete-btn"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        </div>`;

        document.addEventListener("DOMContentLoaded", () => {
            const getImageUrl = localStorage.getItem("imagePath");

            if (getImageUrl) {
                document.querySelector('#insertImg')?.setAttribute("src", getImageUrl);
            }
        });

        const editBtn = card.querySelector('.edit-btn');
        editBtn?.addEventListener('click', () => {
            editBlog(myBlog.id);
        });

        const deleteBtn = card.querySelector('.delete-btn');
        deleteBtn?.addEventListener('click', () => {
            deleteBlog(myBlog.id);
            card.remove();
        });

        container?.appendChild(card);
    });
}

function deleteBlog(blogId: string) {
    let myBlogs: any[] = [];
    let allBlogs = localStorage.getItem("allBlog");
    myBlogs = allBlogs ? JSON.parse(allBlogs) : [];

    const index = myBlogs.findIndex(blog => blog.id === blogId);

    if (index !== -1) {
        myBlogs.splice(index, 1);
        localStorage.setItem("allBlog", JSON.stringify(myBlogs));
    }
}

function editBlog(blogId: string) {
    // Find the blog entry with the specified id
    let myBlogs: any[] = [];
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