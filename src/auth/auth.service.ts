import {  BadRequestException, Injectable, UnauthorizedException} from '@nestjs/common';
import { UtilisateurService } from 'src/utilisateur/services/utilisateur/utilisateur.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'
import { Utilisateur } from 'src/models/utilisateur.model';

@Injectable()
export class AuthService {

   constructor(
     private usersService: UtilisateurService,
     ) {}

   async VerificationUtilisateur(username: string, mdp: string): Promise<Utilisateur| undefined> {
    console.log("dans auth service 1")

     const user = await this.usersService.findByUsername(username);

     if(!user){ 
      console.log("dans auth service 2");
      throw new BadRequestException()
    }
    // const salt = await bcrypt.genSalt(10);
    // const hashed = await bcrypt.hash(mdp, salt);
    // console.log(bcrypt.compare(hashed, user.mdp))
     if (bcrypt.compareSync(mdp.toString(), user.mdp)) {
      // console.log(bcrypt.compareSync(mdp, user.mdp));
       return user;
     }
     console.log("dans auth service 4");

     throw new UnauthorizedException();
     ;
   }











  // ancien 
    // constructor(private readonly usersService: UtilisateurService, private readonly jwtService: JwtService) {}
    // async signIn(nom_utilisateur, mdp) {
    //   console.log("dans sign")
    //     const user = await this.usersService.findOne(nom_utilisateur);
    //     if (user?.mdp !== mdp) {
    //       console.log("hello auth service ")
    //       throw new UnauthorizedException();
    //     }

    //     const payload = { sub: user.id, nom_utilisateur: user.nom_utilisateur };
    //     return {
    //       access_token: await this.jwtService.signAsync(payload),
    //     };
    // }
    
}
