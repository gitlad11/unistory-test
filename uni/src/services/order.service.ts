import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from 'src/entity/order.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService {
    constructor(@InjectRepository(OrderEntity) private orderRepository: Repository<OrderEntity>) { }

    async getOrders(email){
        var saved = await this.orderRepository.find({ where: { owner : email } });
        return saved;
    }
    async addOrder(order){
        var saved = await this.orderRepository.save(order)
        return saved;
    }
}
