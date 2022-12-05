const collection = document.getElementById("collection");
const books = [{title:"Twilight", author:"Delora Beau"},{title:"Twilight", author:"Delora Beau"}];
books.map((item)=>{
    collection.innerHTML += `
    <li>
<p>
${item.title}
</p>
<p>
${item.author}
</p>
<button>
Remove
</button>

    </li>
    
    
    `
})

