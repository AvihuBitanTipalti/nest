import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new UnauthorizedException('Unauthorized: No token provided');
    }

    const token = authHeader.split(' ')[1];
    if (token !== 'your-secure-token') {
      throw new UnauthorizedException('Unauthorized: Invalid token');
    }

    return true;
  }
}
