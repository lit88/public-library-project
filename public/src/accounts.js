function findAccountById(accounts, id) {
  const account = accounts.find((item) => item.id === id)
  return account
}

function sortAccountsByLastName(accounts) {
 let sorted = accounts.sort((accountA, accountB) =>
  accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1)
  return sorted
}

//  should return the number of times an account has created a 'borrow' record
function getTotalNumberOfBorrows(account, books) {
 const numOfBorrows = books.reduce((total, book)=> {
   const borrow = book.borrows
   for(let i = 0; i < borrow.length; i++){
   if (borrow[i].id === account.id) {total++}
     } return total
  }, 0)
  return numOfBorrows
}
//  should return all of the books taken out by an account with the author embedded
function getBooksPossessedByAccount(account, books, authors) {
    const accountBooks = books.filter((book)=> {
            const borrow = book.borrows
    for (let i = 0; i < borrow.length; i++){
      if (borrow[i].id === account.id && borrow[i].returned === false){
          return book
      } 
    } 
  })
  const bookAuthor = accountBooks.forEach((newBook)=>{
const author = authors.find((authorName) => authorName.id === newBook.authorId )
 newBook.author = author
})
return accountBooks
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
