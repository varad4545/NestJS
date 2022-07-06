import { Body, Controller, Delete, Get,Param,ParseIntPipe,Post,Put, Req, Res, UseGuards, UseInterceptors } from "@nestjs/common";
import { BookGuard } from "./book.guard";
import { AppInterceptor } from "./book.interceptor";
import { BookService } from "./book.service";
import {Book} from './data/book.dto'
import {Request,Response} from 'express'
// import { BookPipe } from "./pipes/book.pipe";

@Controller("book")
export class BookController{
      constructor(private bookService:BookService){}

      @Post('/intercept')
      @UseInterceptors(AppInterceptor)
      helloWorld(@Req() req:Request,@Res()res:Response): any{
           console.log(req.body)
           return res.json(req.body)
      }

      @Get("/findAll")
      @UseGuards(new BookGuard)

      getAllBooks(): Book[]{
         return this.bookService.findAllBooks();
      }
      
      @Put("/update")
      updateBook(@Body() book:Book):string{
        return this.bookService.updateBookService(book)
      }

      @Delete('/delete/:id')
      deleteBook(@Param("id") bookId:string):string{
        return this.bookService.deleteBookService(bookId);
      }

      @Post('/add')
      addBook(@Body() book:Book): string{
        return this.bookService.addBookService(book);
      }

      @Get("/findbook/:id")
      findBookById(@Param("id",ParseIntPipe)id:number):string{
        // console.log(id,typeof(id))
        return "Book by id";
      }


}