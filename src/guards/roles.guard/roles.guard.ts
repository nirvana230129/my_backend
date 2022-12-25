import {
    CanActivate,
    ExecutionContext,
    HttpException,
    HttpStatus,
    Injectable,
    UnauthorizedException
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { ROLES_KEY } from "./roles.decorator";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class RolesGuard implements CanActivate {

    constructor(private jwtService: JwtService,
                private reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass()
        ]);

        if (!requiredRoles.length)
            return true;

        const req = context.switchToHttp().getRequest();
        const authHeader = req.headers.authorization;
        const bearer = authHeader.split(" ")[0];
        const token = authHeader.split(" ")[1];

        if (bearer !== "Bearer" || !token)
            throw new UnauthorizedException({message: "Wrong role1"});

        try {
            const user = this.jwtService.verify(token)
            req.user = user
            console.log(`user: ${JSON.stringify(user)}`)
            return user.role.some((role) => requiredRoles.includes(role));
        } catch (e) {
            console.log(e)
            throw new HttpException("Wrong role2", HttpStatus.FORBIDDEN);
        }
        //const { user } = context.switchToHttp().getRequest();
        //return requiredRoles.some((role) => user.role?.includes(role));
    }
}