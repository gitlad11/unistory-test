import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrderService } from 'src/services/order.service';

@Controller('order')
export class OrderController {
    constructor(private orderService: OrderService) {}

    @Get()
    getOrder(@Param('email') email){
        return this.orderService.getOrders(email);
    }

    @Post('/add')
    postOrder(@Body() order){
        return this.orderService.addOrder(order)
    }
}
