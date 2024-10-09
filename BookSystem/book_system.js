let books = [];

function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        books.push(book);
        showBook();
        clearInputs();
    } else {
        alert('Please fill in all fields correctly.');
    }
}

let bookDetails = '';
function showBook(){
    books.forEach(
        (element, id) => {
            bookDetails += `<h1>book Number: ${id + 1}</h1>`;
            bookDetails += `<p><strong>Book Name:</strong> ${element.bookName}</p>`;
            bookDetails += `<p><strong>Author Name:</strong> ${element.authorName}</p>`;
            bookDetails += `<p><strong>Book Description</strong> ${element.bookDescription}</p>`;
            bookDetails += `<p><strong>No. of Pages:</strong> ${element.pagesNumber}<br>`;

            bookDetails += `<button onclick="editbook(${id})">Edit</button>`;
            bookDetails += `<button onclick="deletebook(${id})">Delete</button>`;
        }
    )
    document.getElementById("books").innerHTML = bookDetails;
}

function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}