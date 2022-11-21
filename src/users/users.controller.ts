import { Body, Post, Get, Controller, Delete, Param, UseGuards } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import { IsLoggedInGuard } from "../guards/is-logged-in.guard";

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Post()
    create(@Body() userDto: CreateUserDto){
        return this.usersService.createUser(userDto)
    }

    @UseGuards(IsLoggedInGuard)
    @Get()
    getAll(){
        return this.usersService.getAllUsers()
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.usersService.deleteUserByID(id);
    }
}
