"use strict";
fetch('https://mybrand-be-6rxz.onrender.com/api/blogs')
    .then(res => {
    if (!res.ok) {
        throw new Error('Network response was not ok');
    }
    return res.json();
})
    .then(data => console.log(data))
    .catch(error => console.error('There was a problem with the fetch operation:', error));
