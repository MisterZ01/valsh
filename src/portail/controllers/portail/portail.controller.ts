import { Portail } from 'src/models/portail.model';
import { Body, Controller, Post } from '@nestjs/common';
import { PortailService } from 'src/portail/services/portail/portail.service';

@Controller('portail')
export class PortailController {

    constructor(private clotu : PortailService ){}


    @Post('portail')

       async portail(
  
              @Body('presence_portail') presence_portail:string,
              @Body('etat_portail') etat_portail: string,
              @Body('type_portail') type_portail: string){
    
                 console.log(presence_portail, etat_portail, type_portail)

                 await this.clotu.createPortail(presence_portail, etat_portail, type_portail)

               } 
}
