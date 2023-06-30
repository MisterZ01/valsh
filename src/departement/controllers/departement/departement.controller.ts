import { Body, Controller, Post } from '@nestjs/common';
import { DepartementService } from 'src/departement/services/departement/departement.service';

@Controller('departement')
export class DepartementController {

    constructor(private depmt : DepartementService ){}


    @Post('departement')

       async departement(
  
              @Body('nom_departement') nom_departement: string){
    
                 console.log(nom_departement)

                 await this.depmt.createDepartement(nom_departement)

               } 
}
