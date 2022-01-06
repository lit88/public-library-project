function findAuthorById(authors, id) {
 return authors.find((author)=> author.id === id)
}

function findBookById(books, id) {
  return books.find((book)=> book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  const out = books.filter((book)=> !book.borrows[0].returned)
  const inStock = books.filter((book)=> book.borrows[0].returned)
  const patrition = [out, inStock]
  return patrition
}

function getBorrowersForBook(book, accounts) {
  const id = book.borrows
  const borrowed = accounts.filter((acc)=> {
   for (let i = 0; i < id.length; i++){
    if (id[i].id === acc.id) {return acc}
  }
})
const addReturned = borrowed.forEach((acc)=> {
   for (let i = 0; i < id.length; i++){
    if (id[i].id === acc.id){
      acc.returned = id[i].returned
}}})
return borrowed
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
