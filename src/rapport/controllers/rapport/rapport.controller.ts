import { Body, Controller, Post } from '@nestjs/common';
import { RapportService } from 'src/rapport/services/rapport/rapport.service';

@Controller('rapport')
export class RapportController {

    
    constructor(private rapp : RapportService ){}


    @Post('rapport')

       async rapport(
  
              @Body('statut') statut: string,
              @Body('id_utilisateur') id_utilisateur: number){
    
                 console.log( statut, id_utilisateur)

                 await this.rapp.createRapport( id_utilisateur, statut )

               } 
}
