import { Body, Controller, Get, Post } from '@nestjs/common';
import { AbonementService } from 'src/services/abonement.service';
import { AbonDTO } from 'src/dto/abon.dto';

@Controller('abonement')
export class AbonementController {
    constructor(private abonService: AbonementService) {}

    @Post('/add')
    postAbon(@Body() data: AbonDTO){
        console.log(data)
        return this.abonService.addAbomenent(data);
    }

    @Post()
    getAbon(@Body() user: object){
        return this.abonService.getAbonement(user);
    }
    
    @Post('/remove')
    removeAbon(@Body() data: object){
        console.log(data)
        return this.abonService.removeAbonement(data);
    }
}
