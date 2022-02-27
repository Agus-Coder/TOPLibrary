// Constantes
let library = [
    {
    name: "Harry Potter",
    author: "J.K. Rowling",
    year: '1997',
    },
    {
    name: "The Lord of the Rings",
    author: "J.R.R Tolkien",
    year: '1954',
    },
];
let newBook = {}

const collection = document.querySelector('#collection')
const button = document.querySelector('#submitButton')
const list = document.querySelector('article')

// Funcion Objeto
function book(name,author, year) {
    this.name = name
    this.author = author
    this.year = year
}

// Functions

function addBook(){
    newBook = new book(
        document.getElementById('title').value,
        document.getElementById('author').value,
        document.getElementById('year').value
    )

    library.push(newBook);

    const divlibro1 = document.createElement('div');
    collection.appendChild(divlibro1);
    const divlibro2 = document.createElement('div');
    divlibro1.appendChild(divlibro2);

    const botonBorrar = document.createElement('button')
    divlibro1.appendChild(botonBorrar)
    botonBorrar.classList.add('deleteBtn')
    botonBorrar.textContent = 'delete book'
    divlibro2.textContent = `Book Name: ${newBook.name} Author: ${newBook.author} Year: ${newBook.year}`
    
}

// Event listeners

button.addEventListener('click', addBook)

list.addEventListener('click',function(e){
    if(e.target.classList=='deleteBtn'){
        const divv = e.target.parentElement;
        let index = Array.from(divv.parentNode.children).indexOf(divv)
        library.splice(index,1)
        divv.parentNode.removeChild(divv)
    }
})

// El problema que tenias aca era en donde tenias agregado el event listener y el bubbling que te generaba
// al usar addBook estabas generando un E.L. que era 'hijo' de tu addBook. Por eso cuando agregabas un libro se mostraba el nombre por
// console log (Lo usabas para probar la funcion de eliminar), como consecuencia de haber agregado el libro. Tenias un bubbling actuando.

// en la segunda aproximacion lo que se hace es agregar un eventlistener entero sobre el article y con un if
// podemos especificar que solo se dispare al hacer click sobre el boton. 

