import { Body, Controller, Post } from '@nestjs/common';
import { EvacuationService } from 'src/evacuation/services/evacuation/evacuation.service';

@Controller('evacuation')
export class EvacuationController {

    constructor(private evacuat : EvacuationService ){}


    @Post('evacuation')

       async evacuation(
  
              @Body('presencesysteme_evacuation') presencesysteme_evacuation: string,
              @Body('etatsysteme_evacuation') etatsysteme_evacuation: string){
    
                 console.log(presencesysteme_evacuation, etatsysteme_evacuation)

                 await this.evacuat.createEvacuation(presencesysteme_evacuation, etatsysteme_evacuation)

               } 
}
