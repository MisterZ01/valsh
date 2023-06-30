import { Body, Controller, Post } from '@nestjs/common';
import { EtancheitemassifService } from 'src/etancheitemassif/services/etancheitemassif/etancheitemassif.service';

@Controller('etancheitemassif')
export class EtancheitemassifController {


    constructor(private etanchmassif : EtancheitemassifService ){}


    @Post('etancheitemassif')

       async etancheitemassif(
  
              @Body('presence_etancheitemassif') presence_etancheitemassif: string,
              @Body('etat_etancheitemassif') etat_etancheitemassif: string){
    
                 console.log(presence_etancheitemassif, etat_etancheitemassif)

                 await this.etanchmassif.createEtancheitesite(presence_etancheitemassif, etat_etancheitemassif)

               } 
}
