import { User } from "./users.entity";
import { Repository } from 'typeorm';
import { CreateUserDto } from "./dto/create-user.dto";
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    createUser(dto: CreateUserDto): Promise<User>;
    getAllUsers(): Promise<User[]>;
    getUserByEmail(email: any): Promise<User>;
    deleteUserByID(id: any): Promise<import("typeorm").DeleteResult>;
}
