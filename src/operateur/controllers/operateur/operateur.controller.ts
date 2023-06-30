import { Body, Controller, Post } from '@nestjs/common';
import { OperateurService } from 'src/operateur/services/operateur/operateur.service';

@Controller('operateur')
export class OperateurController {

    constructor(private operat : OperateurService ){}


    @Post('operateur')

       async operateur(
  
              @Body('nomoperateur') nomoperateur: string,
              @Body('typelocal') typelocal: string){
    
                 console.log(nomoperateur, typelocal)

                 await this.operat.createOperateur(nomoperateur, typelocal)

               } 
}
