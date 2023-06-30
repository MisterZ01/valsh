import {CanActivate, ExecutionContext, Injectable,UnauthorizedException,} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { jwtConstants } from './constantes';
  
  @Injectable()
  export class AuthGuard implements CanActivate {

    constructor(private readonly jwtService: JwtService) {}
  
    async canActivate(context: ExecutionContext): Promise<boolean> {
      const request = context.switchToHttp().getRequest();
      const token = this.extractTokenFromHeader(request); // il recupere le token dans la requette http
      if (!token) { // il vérifie si le token existe et il n'est pas vide
        throw new UnauthorizedException(); // s'il n'existe pas, une erreur est signalée
      }
      try { // si le token existe donc on execute ce qui suit
        const payload = await this.jwtService.verifyAsync(
          token,
          {
            secret: jwtConstants.secret
          }
        );
        // 💡 We're assigning the payload to the request object here
        // so that we can access it in our route handlers
        request['user'] = payload;
      } catch {
        throw new UnauthorizedException();
      }
      return true;
    }
  
    private extractTokenFromHeader(request: Request): string | undefined { // c'est cette fonction qui a été appele en haut
      const [type, token] = request.headers.authorization?.split(' ') ?? [];
      return type === 'Bearer' ? token : undefined;
    }
  }