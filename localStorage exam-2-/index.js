// Handle form submission on Home Page
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const book = {
        name: form.elements['bookName'].value,
        author: form.elements['authorName'].value,
        description: form.elements['bookDescription'].value,
        addedDate: form.elements['addedDate'].value,
        category: form.elements['bookCategory'].value
    };

    let books = JSON.parse(localStorage.getItem('book-list')) || [];
    books.push(book);
    localStorage.setItem('book-list', JSON.stringify(books));

   
    form.reset();
});


function displayBooks() {
    const books = JSON.parse(localStorage.getItem('book-list')) || [];

    const tableBody = document.querySelector('#dashboardTable tbody');
    tableBody.innerHTML = '';

    books.forEach(book => {
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.description}</td>
            <td>${book.addedDate}</td>
            <td>${book.category}</td>
            <td>Price</td>
            <td><button class="buy-btn">Buy</button></td>
            <td><button class="bookmark-btn">Bookmark</button></td>
        `;
        row.querySelector('.buy-btn').addEventListener('click', function() {
           
        });
        row.querySelector('.bookmark-btn').addEventListener('click', function() {
           
        });
    });
}
displayBooks();
