import {  BadRequestException, Injectable, UnauthorizedException} from '@nestjs/common';
import { UtilisateurService } from 'src/utilisateur/services/utilisateur/utilisateur.service';

import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';
import { PassportStrategy } from '@nestjs/passport';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

    constructor(private authService :AuthService){
        super();
        console.log("dans strategie 1")
    }

    async validate(username:string, password:string){
        console.log("dans strategie 2")
        const user =  this.authService.VerificationUtilisateur(username, password);
        if (!user){ 
            console.log('dans local.startegy');
            throw new UnauthorizedException()
        }
        return user;
    }

}