import { Injectable } from '@nestjs/common';
import { User } from "./users.entity";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User)
                private usersRepository: Repository<User>) {}

    async createUser(dto: CreateUserDto) {
        const user = new User()
        user.email = dto.email
        user.password = dto.password
        if (dto.email == "admin@mail")
            user.role = 'admin'
        return await this.usersRepository.save(user)
    }

    async getAllUsers() {
        return await this.usersRepository.find()
    }

    async getUserByEmail(email) {
        return await this.usersRepository.findOneBy({email: email})
    }

    async deleteUserByID(id) {
        return await this.usersRepository.delete(id)
    }
}
