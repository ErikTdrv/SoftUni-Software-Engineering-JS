class LibraryCollection{
    capacity;
    books = [];
    constructor(capacity){
        this.capacity = Number(capacity);
        this.books = [];
    }

    addBook (bookName, bookAuthor){
        if (this.books.length >= this.capacity){
            throw new Error('Not enough space in the collection.')
        }else {
            let collection = {
                bookName,
                bookAuthor,
                payed: false
            }
            this.books.push(collection)
            return `The ${bookName}, with an author ${bookAuthor}, collect.`
        }
    }

    payBook(bookName){
        const currentBook = this.books.find(x => x.bookName == bookName);
        if (!currentBook){
            throw new Error(`${bookName} is not in the collection.`)
        }
        if (currentBook.payed){
            throw new Error(`${bookName} has already been paid.`)
        }
        currentBook.payed = true;
        return `${bookName} has been successfully paid.`
    }

    removeBook(bookName){
        const currentBook = this.books.find(x => x.bookName == bookName);
        if (!currentBook){
            throw new Error("The book, you're looking for, is not found.")
        }
        if(!currentBook.payed){
            throw new Error(`${bookName} need to be paid before removing from the collection.`)
        }
        let indexOfBook = this.books.indexOf(currentBook);
        this.books.splice(indexOfBook,1);
        return `${bookName} remove from the collection.`
    }

    getStatistics(bookAuthor){
        let result = [];
        if (!bookAuthor){
            result.push(`The book collection has ${this.capacity - this.books.length} empty spots left.`);
            this.books = this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));

            for (let el of this.books){
                if(el.payed){
                    let stringie = `${el.bookName} == ${el.bookAuthor} - Has Paid.`
                    result.push(stringie)
                }else if(el.payed == false){
                    let stringie = `${el.bookName} == ${el.bookAuthor} - Not Paid.`
                    result.push(stringie)
                }
            }
            return result.join('\n').trim()
        }else{
            let isFound = this.books.find(x => x.bookAuthor == bookAuthor)
            if (isFound && isFound.payed == true){
                return `${isFound.bookName} == ${isFound.bookAuthor} - Has Paid.`
            }else if(isFound && isFound.payed == false){
                return `${isFound.bookName} == ${isFound.bookAuthor} - Not Paid.`
            }else{
                throw new Error(`${bookAuthor} is not in the collection.`) 
            }
            
        }
    }
}
let library = new LibraryCollection(5);

library.addBook("Don Quixote", "Miguel de Cervantes");
library.payBook("Don Quixote");
library.addBook("In Search of Lost Time", "Marcel Proust");
library.addBook("Ulysses", "James Joyce");