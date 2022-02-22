// Constantes
let library = [];
let newBook = {}

const collection = document.querySelector('#collection')
const button = document.querySelector('#submitButton')

// Funcion Objeto
function book(name,author, year) {
    this.name = name
    this.author = author
    this.year = year
}

// object prototypes
book.prototype.delete = function (){
    console.log(this.name)
}


// Functions

function display(){
    newBook = new book(
        document.getElementById('title').value,
        document.getElementById('author').value,
        document.getElementById('year').value
    )

    library.push(newBook);

    const divOne = document.createElement('div');
    collection.appendChild(divOne);
    const divTwo = document.createElement('div');
    divOne.appendChild(divTwo);
    const buttonOne = document.createElement('button');
    divOne.appendChild(buttonOne);
    divTwo.textContent = `Book Name: ${newBook.name} Author: ${newBook.author} Year: ${newBook.year}`
    buttonOne.textContent = 'Delete book';
    buttonOne.addEventListener('click', book.delete())

}

// Event listeners

button.addEventListener('click', display)
