import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from 'src/services/user.service';
import { UserDTO } from 'src/dto/user.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post('/authentication')
    getUser(@Body() data: object){
        return this.userService.getUser(data['token']);
    }

    @Post()
    postUser(@Body() data: UserDTO){
        return this.userService.postUser(data);
    }
    
    @Post('/login')
    loginUser(@Body() data: UserDTO){
        return this.userService.loginUser(data)
    }

}
 