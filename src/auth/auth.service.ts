import { HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from 'bcryptjs';
import { User } from "../users/users.entity";

@Injectable()
export class AuthService {

    constructor(private userService: UsersService,
                private jwtService: JwtService) {}

    async login(userDto: CreateUserDto) {
        const user = await this.validateUser(userDto)
        return this.generateToken(user)
    }

    async registration(userDto: CreateUserDto) {
        if (await this.userService.getUserByEmail(userDto.email))
            throw new HttpException('Пользователь с таким email уже существует', HttpStatus.BAD_REQUEST)

        const hashedPassword = await bcrypt.hash(userDto.password, 5)
        const user = await this.userService.createUser({...userDto, password: hashedPassword})
        return this.generateToken(user)
    }

    private async generateToken(user: User) {
        const payload = {id: user.id, email: user.email}
        return {token: this.jwtService.sign(payload)}
    }

    private async validateUser(userDto: CreateUserDto) {
        const user = await this.userService.getUserByEmail(userDto.email)
        if (user && await bcrypt.compare(userDto.password, user.password))
            return user
        throw new UnauthorizedException({message: "Некорректный email или password"})
    }
}
