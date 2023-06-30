import { Body, Controller, Post } from '@nestjs/common';
import { GrilleProtecService } from 'src/grille_protec/services/grille_protec/grille_protec.service';

@Controller('grille-protec')
export class GrilleProtecController {

    constructor(private grillepr : GrilleProtecService ){}


    @Post('grilleP')

       async grilleP(
  
              @Body('presence_grille') presence_grille: string,
              @Body('etat_grille') etat_grille: string,
              @Body('observation') observation: string){
    
                 console.log(presence_grille,etat_grille, observation)

                 await this.grillepr.createGrille(presence_grille, etat_grille, observation)

               }
}
