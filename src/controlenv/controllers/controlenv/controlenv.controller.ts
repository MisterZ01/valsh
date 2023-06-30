import { Body, Controller, Post } from '@nestjs/common';
import { ControlenvService } from 'src/controlenv/services/controlenv/controlenv.service';

@Controller('controlenv')
export class ControlenvController {

    
    constructor(private control : ControlenvService ){}


    @Post('controle')

       async controle(
  
              @Body('datecontrole') datecontrole: Date,
              @Body('heuredebutcontrole') heuredebutcontrole: string,
              @Body('heurefincontrole') heurefincontrole: string){
    
                 console.log(datecontrole, heuredebutcontrole, heurefincontrole)

                 await this.control.createControl(datecontrole, heuredebutcontrole, heurefincontrole)

               } 
}
