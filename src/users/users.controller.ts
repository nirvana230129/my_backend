import {Body, Post, Get, Controller, Delete, Param} from '@nestjs/common';
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Post()
    create(@Body() userDto: CreateUserDto){
        return this.usersService.createUser(userDto)
    }

    @Get()
    getAll(){
        return this.usersService.getAllUsers()
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.usersService.deleteUserByID(id);
    }
}
