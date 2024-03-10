fetch('https://mybrand-be-6rxz.onrender.com/api/query')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const commentBox = document.getElementById("comment");
        data.forEach(comment => {
            const commentElement = document.createElement("div");
            commentElement.innerHTML = `
                <div class="com-2">
                    <div id="two-comp">
                        <i class="fa-solid fa-circle-user" id="av-1"></i>
                        <p class="nom-1">${comment.name}</p>
                    </div>
                    <span class="text-1">
                        <h3>${comment.email}</h3>
                        <p>${comment.message}</p>
                        <span class="sec-1">
                            <a href="#" id="anc-1">Reply</a> .  <a href="#" id="anc-1">${comment.updatedAt}</a> . <button class="del-btn" data-id="${comment._id}">Delete</button>
                        </span>
                    </span>
                </div>
            `;
            commentBox.appendChild(commentElement);
        });

        // Attach event listener to delete buttons
        const deleteButtons = document.querySelectorAll(".del-btn");
        deleteButtons.forEach(button => {
            button.addEventListener("click", () => {
                const commentId = button.getAttribute("data-id");
                showConfirmationPopup(commentId);
            });
        });
    })
    .catch(error => console.error("Error fetching queries:", error));

function showConfirmationPopup(commentId) {
    if (confirm("Are you sure you want to delete this query?")) {
        deleteQuery(commentId);
    }
}

function deleteQuery(commentId) {
    fetch(`https://mybrand-be-6rxz.onrender.com/api/query/${commentId}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to delete query');
        }
        // Remove the deleted query from the DOM
        const commentElement = document.querySelector(`[data-id="${commentId}"]`).closest('.com-2');
        commentElement.remove();
    })
    .catch(error => console.error("Error deleting query:", error));
}

fetch('https://mybrand-be-6rxz.onrender.com/api/query')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const queryCount = data.length;
        const blogElement = document.createElement('div');
        blogElement.innerHTML = `
            <p id="first-p">Total Queries</p>
            <h1>${queryCount}</h1>
        `;
        const blogsContainer = document.getElementById('num-1');
        blogsContainer.appendChild(blogElement);
    })
    .catch(error => console.error('Error fetching blogs:', error));

document.getElementById('log-1').addEventListener('click', logoutUser);

function checkAuthentication() {
    const token = localStorage.getItem('token');
    if (!token) {
        window.location.href = '/LogIn/Login.html';
    }
}

window.addEventListener('DOMContentLoaded', () => {
    checkAuthentication();
});

function logoutUser() {
    localStorage.removeItem('token');
    window.location.href = '/LogIn/Login.html';
}
