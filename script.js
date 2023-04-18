let library = [
    {
        name: 'To Kill A Mockingbird',
        author: 'Harper Lee',
        pages: 336,
        status: 'Read',
    },
    {
        name: 'The Great Gatsby',
        author: 'F.Scott Fitzgerald',
        pages: 180,
        status: 'To Read',
    },
    {
        name: 'The Animal Farm',
        author: 'Geroge Orwell',
        pages: 128,
        status: 'To Read',
    },
    {
        name: 'Fahrenheit 451',
        author: 'Ray Bradbury',
        pages: 194,
        status: 'Reading',
    },
    {
        name: 'Brave New World',
        author: 'Aldous Huxley',
        pages: 268,
        status: 'To Read',
    },
    {
        name: 'Of Mice and Men',
        author: 'John Steinback',
        pages: 103,
        status: 'To Read',
    },
    {
        name: 'Slaughterhouse Five',
        author: 'Kurt Vonnegut Jr',
        pages: 275,
        status: 'To Read',
    },
    {
        name: 'The Stranger',
        author: 'Albert Camus',
        pages: 159,
        status: 'Read',
    },
    {
        name: '2001: A Space Odyssey',
        author: 'Arthur.C.Clarke',
        pages: 297,
        status: 'Read',
    }
]

// printing out the existing books from the library array

library.map(book => {
    let card = document.createElement('div');
    card.id = 'Card';
    document.body.appendChild(card);
    
    let cardName = document.createElement("h1");
    cardName.id = 'Name';
    cardName.textContent = book.name;
    card.append(cardName);
    
    let cardAuthor = document.createElement('h2');
    cardAuthor.id = "Author";
    cardAuthor.textContent = book.author;
    card.append(cardAuthor);
    
    let cardPages = document.createElement('h3');
    cardPages.id = 'Pages';
    cardPages.textContent = book.pages;
    card.append(cardPages);

    let options = document.createElement('div');
    options.id = 'Options';
    card.append(options);

    let status = document.createElement('select');
    status.id = 'Status';
    status.name = 'Status';
    
    let optionRead = document.createElement('option');
    optionRead.textContent = 'Read';
    optionRead.value = 'Read';
    let optionToRead = document.createElement('option');
    optionToRead.textContent = 'To Read';
    optionToRead.value = 'To Read';
    let optionReading = document.createElement('option');
    optionReading.textContent = 'Reading';
    optionReading.value = 'Reading';
    

    status.append(optionRead)
    status.append(optionReading)
    status.append(optionToRead)

    status.style.marginRight = '5px';
    
    status.value = book.status;
    
    options.append(status);

    let button = document.createElement('button');
    button.id = 'Remove';
    button.textContent = 'Remove';
    options.append(button);
})

// function that adds a new book to the library

let submit = document.getElementById('submit');
submit.addEventListener('click', () => {


    let card = document.createElement('div');
    card.id = 'Card';
    document.body.appendChild(card);

    let cardName = document.createElement("h1");
    cardName.id = 'Name';
    let nameInput = document.getElementById('NameInput');
    if (nameInput.value.length != 0) {
        cardName.textContent = nameInput.value;
        card.append(cardName);
    }

    let cardAuthor = document.createElement('h2');
    cardAuthor.id = "Author";
    let authorInput = document.getElementById("AuthorInput");
    if (authorInput.value.length != 0) {
        cardAuthor.textContent = authorInput.value;
        card.append(cardAuthor);
    }

    let cardPages = document.createElement('h3');
    cardPages.id = 'Pages';
    let pagesInput = document.getElementById("PagesInput");
    if (pagesInput.value.length != 0) {
        cardPages.textContent = pagesInput.value;
        card.append(cardPages);
    }

    let options = document.createElement('div');
    options.id = 'Options';
    card.append(options);

    let status = document.createElement('select');
    status.id = 'Status';
    status.name = 'Status';

    let optionRead = document.createElement('option');
    optionRead.textContent = 'Read';
    optionRead.value = 'Read';
    let optionToRead = document.createElement('option');
    optionToRead.textContent = 'To Read';
    optionToRead.value = 'To Read';
    let optionReading = document.createElement('option');
    optionReading.textContent = 'Reading';
    optionReading.value = 'Reading';
    

    status.append(optionRead)
    status.append(optionReading)
    status.append(optionToRead)

    status.style.marginRight = '5px';

    let statusAdd = document.getElementById('Status-Add');

    status.value = statusAdd.value;
    options.append(status);

    let button = document.createElement('button');
    button.id = 'Remove';
    button.textContent = 'Remove';
    options.append(button);

    nameInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    statusAdd.value = optionRead.value;
})

// function to remove a specific book

let buttonRemove = document.getElementById("Remove");

buttonRemove.addEventListener('click', () => {
    console.log(buttonRemove);
})

