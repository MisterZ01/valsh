import { Body, Controller, Post } from '@nestjs/common';
import { PlaquesignalService } from 'src/plaquesignal/services/plaquesignal/plaquesignal.service';

@Controller('plaquesignal')
export class PlaquesignalController {

    constructor(private plaq : PlaquesignalService ){}


    @Post('plaquesignal')

       async plaquesignal(
              @Body('presence_plaquesignal') presence_plaquesignal: string,
              @Body('etat_plaquesignal') etat_plaquesignal: string){
    
                 console.log(presence_plaquesignal, etat_plaquesignal)

                 await this.plaq.createPlaque( presence_plaquesignal, etat_plaquesignal)

               } 
}
