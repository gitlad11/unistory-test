import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbonementEntity } from 'src/entity/abonement.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AbonementService {
    constructor(@InjectRepository(AbonementEntity) private abonRepository: Repository<AbonementEntity>) { }

    async addAbomenent(abon: object){
        var saved = await this.abonRepository.save(abon)
        if(saved){
          return saved
        } else {
          return { error : 'Ошибка добавления' }
        }
      }

    async getAbonement(user: object){
        var saved = await this.abonRepository.findOne({ where: { owner : user['owner'] } });
        if(saved){
            return saved;
        } else {
            return { error : 'Не найден' }
        }
    }  

    async removeAbonement(abon: object){
        console.log(abon)
        var saved = await this.abonRepository.createQueryBuilder('users')
                                            .delete()
                                            .from(AbonementEntity)
                                            .where("id = :id", { id: abon['id'] })
                                            .execute()

        if(saved){
            console.log(saved)
            return saved
        }
    }
    
}
