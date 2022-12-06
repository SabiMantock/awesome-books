/* eslint-disable array-callback-return */
/* eslint-disable quotes */
const collection = document.getElementById("collection");
const title = document.getElementById("book_title");
const author = document.getElementById("book_author");
const form = document.getElementById("form");

const books = [];

const addBook = (book) => {
  collection.innerHTML += `
    <li id="${book.id}">
      <p>${book.title}</p>
      <p>${book.author}</p>
      <button class='delete' type='button' onclick=remove_book("${book.id}") >Remove</button>
    </li>
`;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (title.value && author.value !== "") {
    const book = {
      id: Math.random(),
      title: title.value,
      author: author.value,
    };
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
    addBook(book);
    form.reset();
    console.log(books);
  }
});

function remove_book(book_id){
    console.log(book_id)
    let deleteBook = JSON.parse(localStorage.getItem("books"))
    let newArray = deleteBook.filter((book) => book.id != book_id)
    console.log(newArray)
    localStorage.setItem("books", JSON.stringify(newArray));

}