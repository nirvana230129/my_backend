import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {

    @IsString({message: "It must be a string"})
    @IsEmail({message: "Incorrect email"})
    readonly email: string;

    @IsString({message: "It must be a string"})
    @Length(8, 100, {message: "Password must be between 8 and 100 characters long"})
    readonly password: string;
}