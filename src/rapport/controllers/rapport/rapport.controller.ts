import { Body, Controller, Post } from '@nestjs/common';
import { RapportService } from 'src/rapport/services/rapport/rapport.service';

@Controller('rapport')
export class RapportController {

    
    constructor(private rapp : RapportService ){}


    @Post('rapport')

       async rapport(
  
              @Body('titre_rapport') titre_rapport: string,
              @Body('date_finition') date_finition: Date){
    
                 console.log(titre_rapport, date_finition)

                 await this.rapp.createRapport(titre_rapport, date_finition)

               } 
}
