// 7. Skapa ett objekt "library" med egenskaperna name, location och books.
// "books"-egenskapen ska vara en array av objekt, där varje objekt representerar en bok med egenskaperna title, author och isAvailable.
const library = {
    name: "Stadsbiblioteket",
    location: "Centrum",
    books: [
      { title: "1984", author: "George Orwell", isAvailable: true },
      { title: "The Catcher in the Rye", author: "J.D. Salinger", isAvailable: false },
      { title: "To Kill a Mockingbird", author: "Harper Lee", isAvailable: true }
    ]
  };
  
  // Uppgift 1: Loopa genom arrayen "books" och skriv ut titeln och författaren för varje bok.
  // Uppgift 2: Hitta och skriv ut endast de böcker som är tillgängliga (isAvailable: true).

 // Testa själv!
//  library.books.forEach(function(book) {
//   console.log(`${book.title} ${book.author}`);
//  });


//  for(let i = 0; i < library.books.length; i++) {
//     if(library.books[i].isAvailable) {
//       console.log(`Book ${library.books[i].title} is available`)
//     }
//  }

//  library.books.forEach(function(book) {
//   if(book.isAvailable) {
//     console.log(`Book ${book.title} is available`)
//   }
//  })

const filterBooks = library.books.filter(function (book) {
    return book.isAvailable;
});

console.log(filterBooks)