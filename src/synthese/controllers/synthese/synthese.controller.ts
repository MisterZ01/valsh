import { Body, Controller, Post } from '@nestjs/common';
import { SyntheseService } from 'src/synthese/services/synthese/synthese.service';

@Controller('synthese')
export class SyntheseController {

        
    constructor(private synthe : SyntheseService ){}


    @Post('synthese')

       async synthese(
  
              @Body('partieconcernee') partieconcernee: string,
              @Body('anormalies') anormalies: string,
              @Body('recommandations') recommandations: string){
    
                 console.log(partieconcernee, anormalies, recommandations)

                 await this.synthe.createSynthese(partieconcernee, anormalies, recommandations)

               }
}
