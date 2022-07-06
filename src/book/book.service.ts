import { Injectable } from "@nestjs/common";
import { timeStamp } from "console";
import { Book } from "./data/book.dto";
import {v4 as uuidv4} from 'uuid';
@Injectable()
export class BookService{
    public books: Book[]=[];

    addBookService(book:Book):string{
        book.id=uuidv4()
        this.books.push(book)
        return "Book has been successfully added"
    }

    updateBookService(book:Book):string{
         let index=this.books.findIndex((currentBook)=>{
            return currentBook.id =book.id;
         });
         this.books[index]=book;
         return `Book has been successfully updated`
    }

    deleteBookService(bookId: string):string{
        this.books=this.books.filter((book)=>{
            return book.id != bookId
        })
        return "Book has been deleted"
    }

    findAllBooks():Book[]{
        return this.books;
    }
}