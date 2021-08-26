function loadComment() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => myComment(data))
}

loadComment();
const comment = document.getElementById('comment');
function myComment(data) {
    for (let source of data) {
        const div = document.createElement('div');
        div.classList.add('comment-color')
        div.innerHTML = `
        <h3>${source.id}</h3>
        <h5>${source.name}</h5>
        <h5>${source.email}</h5>
        <p>${source.body}</p>
        `
        comment.appendChild(div);
    }

}