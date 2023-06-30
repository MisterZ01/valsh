import { Body, Controller, Post } from '@nestjs/common';
import { ClimatisationService } from 'src/climatisation/services/climatisation/climatisation.service';

@Controller('climatisation')
export class ClimatisationController {

    constructor(private climat : ClimatisationService ){}


    @Post('climatisation')

       async climatisation(
  
              @Body('presenceclim') presenceclim: string,
              @Body('etatclim') etatclim: string,
              @Body('nbreclim') nbreclim: number,
              @Body('typeclim') typeclim: string,
              @Body('etancheiteconnexion') etancheiteconnexion: string,
              @Body('condenseur') condenseur: string,
              @Body('tuyauterieclim') tuyauterieclim: string){
    
                 console.log(presenceclim, etatclim,  nbreclim, typeclim, etancheiteconnexion, condenseur, tuyauterieclim)

                 await this.climat.createClimatiseur(presenceclim, etatclim,  nbreclim, typeclim, etancheiteconnexion, condenseur, tuyauterieclim)

               }
}
