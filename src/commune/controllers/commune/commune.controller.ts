import { Body, Controller, Post } from '@nestjs/common';
import { CommuneService } from 'src/commune/services/commune/commune.service';

@Controller('commune')
export class CommuneController {

    constructor(private comune : CommuneService ){}


    @Post('commune')

       async commune(
  
              @Body('nom_commune') nom_commune: string){
    
                 console.log(nom_commune)

                 await this.comune.createCommune(nom_commune)

               } 
}
