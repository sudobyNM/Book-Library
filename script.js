const addbtn = document.querySelector(".add-book");
const bookForm = document.querySelector("#new-book");

addbtn.addEventListener("click", addBook);

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

let defaultBook = new Book("The Hunger Games", "S. Collins", 384, true);

myLibrary.push(defaultBook);
render();

function addBookToLib() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").checked;

  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  render();
}

function render() {
  let libBook = document.querySelector(".list");
  libBook.innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];

    let bookEl = document.createElement("div");
    bookEl.classList.add("card");
    bookEl.innerHTML = `<div class="book-grid">
      <h3>${book.title}</h3>
      <p>${book.author}</p>
      <p>${book.pages} pages </p>
     
      <div class="f-btn">
      <button class="status" onclick="toggleRead(${i})">
        ${book.read ? "Read" : "not read yet"}
      </button>
      <button class="delete" onclick="removeBook(${i})">
        Remove
      </button>
      </div>`;

    libBook.appendChild(bookEl);
  }
}

function removeBook(i) {
  myLibrary.splice(i, 1);
  render();
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

function toggleRead(i) {
  myLibrary[i].toggleRead();
  render();
}

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addBookToLib();

  title.value = "";
  author.value = "";
  pages.value = "";
  read.checked = "";
  bookForm.style.display = "none";
});

function addBook() {
  bookForm.style.display = "flex";
}

const closeForm = document.querySelector(".b2");
closeForm.addEventListener("click", (e) => {
  e.preventDefault();
  bookForm.style.display = "none";
});
