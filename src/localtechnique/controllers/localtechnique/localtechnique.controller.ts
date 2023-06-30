import { Body, Controller, Post } from '@nestjs/common';
import { LocaltechniqueService } from 'src/localtechnique/services/localtechnique/localtechnique.service';

@Controller('localtechnique')
export class LocaltechniqueController {

    constructor(private localtec : LocaltechniqueService ){}


    @Post('localtechnique')

       async localtechnique(
  
              @Body('etatlocal') etatlocal: string,
              @Body('typelocal') typelocal: string,
              @Body('etatboulonnerie') etatboulonnerie: string,
              @Body('etatassessoire') etatassessoire: string){
    
                 console.log(etatlocal, typelocal, etatboulonnerie, etatassessoire)

                 await this.localtec.createLocal(etatlocal, typelocal, etatboulonnerie, etatassessoire)

               } 
}
