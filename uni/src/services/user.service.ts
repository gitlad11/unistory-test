import { Injectable,  HttpException, HttpStatus } from '@nestjs/common';
import 'bcrypt';
import * as crypto from 'crypto-js';
import * as jwt from 'jsonwebtoken';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/entity/user.entity';


const sign_key = 'sign_key'

@Injectable()
export class UserService {
  constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) { }

  async getUser(token: string){
    var decoded = jwt.verify(token, sign_key);
    var saved = await this.userRepository.findOne({ where: { email : decoded['email'] } })
    return saved;
  }
  
  async postUser(user: object){
    user['password'] = crypto.AES.encrypt(user['password'], 'secret-key').toString();
    var saved = await this.userRepository.save(user);
    if(saved){
      var token = jwt.sign({ 'email' : user['email'] }, sign_key, { expiresIn: '365d' })
      return { token : token };
    } else {
      return { error : 'Пользователь не создан!' }
    }
  }

  async loginUser(user: object){
    var saved = await this.userRepository.findOne({ where: { email : user['email'] } });
    if(saved){
      var password = crypto.AES.decrypt(user['password'], 'secret-key').toString(crypto.enc.Utf8);
      var password_2 = crypto.AES.decrypt(saved['password'], 'secret-key').toString(crypto.enc.Utf8);
      if(password == password_2){
        var token = jwt.sign(user, sign_key, { expiresIn: '365d' })
        return { token : token };   
      } else {
        return { error : "Неправильный пароль!" }
      }
    } else {
      return { error : 'Пользователь не найден!' }
    }
  }

  async changeUser(user: object){
    var saved = await this.userRepository.update({ id: user['id']}, { email: user['new_email'] })
    if(saved){
      return saved
    } else {
      return { error : 'Ошибка измененния' }
    }
  }

}

