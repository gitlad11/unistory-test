import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { UserService } from './services/user.service';
import { BooksController } from './controllers/books/books.controller';
import { UserController } from './controllers/user/user.controller';
import { BookService } from './services/book.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { AbonementEntity } from './entity/abonement.entity';
import { OrderEntity } from './entity/order.entity';
import { BookEntity } from './entity/book.entity';
import { AbonementService } from './services/abonement.service';
import { AbonementController } from './controllers/abonement/abonement.controller';
import { OrderController } from './controllers/order/order.controller';
import { OrderService } from './services/order.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type :"sqlite",
    database: "bookshop",
    entities: [UserEntity, AbonementEntity, OrderEntity, BookEntity],
    synchronize: true
  }),
  TypeOrmModule.forFeature([UserEntity]), 
  TypeOrmModule.forFeature([AbonementEntity]), 
  TypeOrmModule.forFeature([BookEntity]),
  TypeOrmModule.forFeature([OrderEntity])
  ],
  controllers: [AppController, BooksController, UserController, AbonementController, OrderController],
  providers: [AppService, UserService, BookService, AbonementService, OrderService],
})

export class AppModule {}
