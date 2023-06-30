import { Body, Controller, Post } from '@nestjs/common';
import { EmpriseService } from 'src/emprise/services/emprise/emprise.service';

@Controller('emprise')
export class EmpriseController {

    constructor(private empris : EmpriseService ){}


    @Post('emprise')

       async emprise(
  
              @Body('presence_proximite_emprise') presence_proximite_emprise: string,
              @Body('nom_emprise') nom_emprise: string,
              @Body('precision_emprise') precision_emprise: string,
              @Body('distancesite_emprise') distancesite_emprise: number){
    
                 console.log(presence_proximite_emprise, nom_emprise, precision_emprise, distancesite_emprise)

                 await this.empris.createEmprise(presence_proximite_emprise, nom_emprise, precision_emprise, distancesite_emprise)

               } 
}
