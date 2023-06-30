import { Body, Controller, Post } from '@nestjs/common';
import { GardeCorpsService } from 'src/garde_corps/services/garde_corps/garde_corps.service';

@Controller('garde-corps')
export class GardeCorpsController {

    constructor(private garde : GardeCorpsService ){}


    @Post('garde_corps')

       async garde_corps(
  
              @Body('presence_garde_corps') presence_garde_corps: string,
              @Body('etat_garde_corps') etat_garde_corps: string){
    
                 console.log(presence_garde_corps, etat_garde_corps)

                 await this.garde.createGarde(presence_garde_corps, etat_garde_corps)

               }
}
