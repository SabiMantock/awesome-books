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
      <button type='button'>Remove</button>
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
