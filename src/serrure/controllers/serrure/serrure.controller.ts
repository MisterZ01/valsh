import { Body, Controller, Post } from '@nestjs/common';
import { SerrureService } from 'src/serrure/services/serrure/serrure.service';

@Controller('serrure')
export class SerrureController {


        constructor(private serre : SerrureService ){}


    @Post('serrure')

       async serrure(
  
              @Body('presence_serrure') presence_serrure: string,
              @Body('etat_serrure') etat_serrure: string,
              @Body('telemetrie') telemetrie: string){
    
                 console.log(presence_serrure, etat_serrure, telemetrie)

                 await this.serre.createSerrure( presence_serrure, etat_serrure, telemetrie)

               } 
}
