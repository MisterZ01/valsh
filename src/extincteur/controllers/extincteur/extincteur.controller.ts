import { Body, Controller, Post } from '@nestjs/common';
import { ExtincteurService } from 'src/extincteur/services/extincteur/extincteur.service';

@Controller('extincteur')
export class ExtincteurController {

    constructor(private extinct : ExtincteurService ){}


    @Post('extincteur')

       async extincteur(
  
              @Body('presence_extincteur') presence_extincteur: string,
              @Body('validite') validite: string,
              @Body('nbre_extincteur') nbre_extincteur: number){
    
                 console.log(presence_extincteur, validite, nbre_extincteur)

                 await this.extinct.createExtincteur(presence_extincteur, validite, nbre_extincteur)

               } 
}
