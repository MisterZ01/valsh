import { Body, Controller, Post } from '@nestjs/common';
import { EtancheitesiteService } from 'src/etancheitesite/services/etancheitesite/etancheitesite.service';

@Controller('etancheitesite')
export class EtancheitesiteController {

    constructor(private etanchsite : EtancheitesiteService ){}


    @Post('etancheitesite')

       async etancheitesite(
  
              @Body('presencet_etancheitesite') presencet_etancheitesite: string,
              @Body('etat_etancheitesite') etat_etancheitesite: string){
    
                 console.log(presencet_etancheitesite, etat_etancheitesite)

                 await this.etanchsite.createEtancheitesite(presencet_etancheitesite, etat_etancheitesite)

               } 
}
