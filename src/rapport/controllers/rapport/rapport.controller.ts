import { Body, Controller, Post } from '@nestjs/common';
import { RapportService } from 'src/rapport/services/rapport/rapport.service';

@Controller('rapport')
export class RapportController {

    
    constructor(private rapp : RapportService ){}


    @Post('Creerrapport')

       async rapport(
  
              @Body('statut') statut: string,
<<<<<<< HEAD
              @Body('date_finition') date_finition: Date){
                 console.log(titre_rapport, date_debut, statut, date_finition)
=======
              @Body('id_utilisateur') id_utilisateur: number){
    
                 console.log( statut, id_utilisateur)
>>>>>>> d03f343c7a3f99e0a3574340007527bd0135dbc7

                 await this.rapp.createRapport( id_utilisateur, statut )

               } 
}
