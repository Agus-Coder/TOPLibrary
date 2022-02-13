
const collection = document.querySelector('#collection')
let newBook = {}

function book(name,author, year) {
    this.name = name
    this.author = author
    this.year = year
}



function display(){
    console.log('funciona')

    newBook = new book(
        document.getElementById('title').value,
        document.getElementById('author').value,
        document.getElementById('year').value
    )

    const div = document.createElement('div');
    collection.appendChild(div);
    div.textContent = ` El libro ingresado es ${newBook.name}, 
    su autor es ${newBook.author} y el anio de publicacion es
    ${newBook.year}`
}

const button = document.querySelector('#submitButton')
button.addEventListener('click', display)

