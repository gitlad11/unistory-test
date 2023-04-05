import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookEntity } from 'src/entity/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BookService {
    constructor(@InjectRepository(BookEntity) private bookRepository: Repository<BookEntity>) { }

    async getBooks(){
        var books = await this.bookRepository.find()
        return books;
    }

    async getBook(id: number){
        return  `${id}`
    }  

    async postBook(data: object){
        console.log(data)
        var saved = await this.bookRepository.save(data);
        return saved;
    }
}
