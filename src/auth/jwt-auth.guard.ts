import {CanActivate, ExecutionContext, UnauthorizedException} from "@nestjs/common";
import {Observable} from "rxjs";
import {JwtService} from "@nestjs/jwt";


export class JwtAuthGuard implements CanActivate {

    constructor(private jwtService: JwtService) {
    }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest()
        try {
            const authHeader
        } catch (e) {
            throw new UnauthorizedException({message: 'Пользователь не авторизован'})
        }
    }
}