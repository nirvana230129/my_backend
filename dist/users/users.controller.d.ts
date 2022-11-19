import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    create(userDto: CreateUserDto): Promise<import("./users.entity").User>;
    getAll(): Promise<import("./users.entity").User[]>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
