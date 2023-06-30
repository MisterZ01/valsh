import { Body, Controller, Post } from '@nestjs/common';
import { ClotureService } from 'src/cloture/services/cloture/cloture.service';
import { SerrureService } from 'src/serrure/services/serrure/serrure.service';

@Controller('cloture')
export class ClotureController {

    constructor(private clotu : ClotureService ){}


    @Post('cloture')

       async cloture(
  
              @Body('presence_cloture') presence_cloture: string,
              @Body('etat_cloture') etat_cloture: string,
              @Body('type_cloture') type_cloture: string){
    
                 console.log(presence_cloture, etat_cloture, type_cloture)

                 await this.clotu.createCloture(presence_cloture, etat_cloture, type_cloture)

               } 
}
