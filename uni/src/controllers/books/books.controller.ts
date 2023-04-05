import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { BookService } from 'src/services/book.service';
import { BookDTO } from 'src/dto/book.dto';

@Controller('books')
export class BooksController {
    constructor(private bookService: BookService) {}
    
    @Get(':id')
    getBook(@Param('id') id){
        return this.bookService.getBook(id);
    }
    
    @Get()
    getBooks(){
        return this.bookService.getBooks()
    }

    @Post('/new')
    postUser(@Body() data: BookDTO){
        console.log(data)
        return this.bookService.postBook(data);
    }   
}
