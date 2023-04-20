const library = [
  {
  title: 'Fellowship of the Ring',
  author: 'J.R. Tolkien',
  status: {
    own: true,
    reading: false,
    read: false
    }
  },
  {
    title: 'Two Towers',
    author: 'J.R. Tolkien',
    status: {
      own: true,
      reading: false,
      read: false
    }
  },
  {
    title: 'Return of the King',
    author: 'J.R. Tolkien',
    status: {
      own: true,
      reading: false,
      read: false
    }
  }
];


library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

const { title: firstBook } = library[0];

console.log(firstBook);

const libraryStr = JSON.stringify(library);

console.log(libraryStr);

const library2 = JSON.parse(libraryStr);

console.log(library2);