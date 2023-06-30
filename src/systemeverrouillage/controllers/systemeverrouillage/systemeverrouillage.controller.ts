import { Body, Controller, Post } from '@nestjs/common';
import { SystemeverrouillageService } from 'src/systemeverrouillage/services/systemeverrouillage/systemeverrouillage.service';

@Controller('systemeverrouillage')
export class SystemeverrouillageController {

    constructor(private system : SystemeverrouillageService ){}


    @Post('verrouillage')

       async verrouillage(
  
              @Body('presencesysteme_verrouillage') presencesysteme_verrouillage: string,
              @Body('etatsysteme_verrouillage') etatsysteme_verrouillage: string){
    
                 console.log(presencesysteme_verrouillage, etatsysteme_verrouillage)

                 await this.system.createVerrouillage(presencesysteme_verrouillage,etatsysteme_verrouillage)

               } 
}
