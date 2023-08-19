import { Body, Controller, Post } from '@nestjs/common';
import { MembreequipeService } from 'src/membreequipe/services/membreequipe/membreequipe.service';

@Controller('membreequipe')
export class MembreequipeController {

    constructor(private membree : MembreequipeService ){}


    @Post('membreequipe')

       async membreequipe(
  
              @Body('nom') nom: string,
              @Body('prenom') prenom: string,
              @Body('fonction') fonction: string,
              @Body('id_equipe') id_equipe: number,
              @Body('id_rapport') id_rapport: number){
    
                 console.log(nom, prenom, fonction, id_equipe, id_rapport)

                 await this.membree.createMembre(nom, prenom, fonction, id_equipe, id_rapport)

               } 
}
