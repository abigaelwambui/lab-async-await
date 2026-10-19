// Write your code here!
async function fetchPosts() {
    try {
        const response = await fetch ("https://jsonplaceholder.typicode.com/posts")
        const posts = await response.json()
        displayPosts(posts)
    } catch (error) {
        console.error("Error fetching posts:", error)
    } 
}


function displayPosts(posts) {
    
    const postList = document.querySelector('#post-list')
    
    posts.forEach((post)=> {
        const li = document.createElement("li")
        const h1 = document.createElement("h1")
        const p = document.createElement("p")

        h1.textContent = post.title
        p.textContent = post.body

        li.appendChild(h1)
        li.appendChild(p)

        postList.appendChild(li)
    })     
}

fetchPosts()
// document.addEventListener('DOMContentLoaded', ()=> {
// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(response => response.json())
// .then(posts => {
//     displayPosts(posts)
//     console.log(posts)
// })
// })










