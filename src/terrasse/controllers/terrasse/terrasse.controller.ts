import { Body, Controller, Post } from '@nestjs/common';
import { TerrasseService } from 'src/terrasse/services/terrasse/terrasse.service';

@Controller('terrasse')
export class TerrasseController {

    constructor(private terre : TerrasseService ){}


    @Post('terrasse')

       async terrasse(
  
              @Body('hauteurterrasse') hauteurterrasse: number,
              @Body('etatterrasse') etatterrasse: string,
              @Body('revetement_espace') revetement_espace: string){
    
                 console.log(hauteurterrasse, etatterrasse, revetement_espace)

                 await this.terre.createTerrasse(hauteurterrasse, etatterrasse, revetement_espace)

               } 
}
