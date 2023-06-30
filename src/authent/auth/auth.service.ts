import {  Injectable, UnauthorizedException} from '@nestjs/common';
import { UtilisateurService } from 'src/utilisateur/services/utilisateur/utilisateur.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(private readonly usersService: UtilisateurService, private readonly jwtService: JwtService) {}
    async signIn(nom_utilisateur, mdp) {
        const user = await this.usersService.findOne(nom_utilisateur);
        if (user?.mdp !== mdp) {
          throw new UnauthorizedException();
        }

        const payload = { sub: user.id, nom_utilisateur: user.nom_utilisateur };
        return {
          access_token: await this.jwtService.signAsync(payload),
        };
    }
    
}
