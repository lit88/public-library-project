function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  return books.reduce((total, book)=>{ book.borrows[0].returned ? total : total++
    return total
  }, 0)
}

function sortAndSlice(array){
   return array.sort((a,b) => b.count - a.count).slice(0,5)
}


function getMostCommonGenres(books) {
const genres = []
books.map((book)=> {
const counting = genres.find((genre)=> genre.name === book.genre)
counting ? counting.count++ : genres.push({name: book.genre, count: 1})
} )
const sorting = sortAndSlice(genres)
return sorting
  }

function getMostPopularBooks(books) {
  const popular = []
   books.map((book)=> popular.push({name: book.title, count: book.borrows.length}))
     const result = sortAndSlice(popular)
   return result
}

function getMostPopularAuthors(books, authors) {
  const popAuthor =[]
  books.map((book)=>{
    const borrowCount = book.borrows.length
    const counting = authors.find((author)=> book.authorId === author.id)
          const {name: {first, last}} = counting
      popAuthor.push({name: `${first} ${last}`, count: borrowCount})})
    const result = sortAndSlice(popAuthor) 
  return result
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
