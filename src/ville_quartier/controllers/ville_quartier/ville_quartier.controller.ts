import { Body, Controller, Post } from '@nestjs/common';
import { VilleQuartierService } from 'src/ville_quartier/services/ville_quartier/ville_quartier.service';

@Controller('ville-quartier')
export class VilleQuartierController {

    constructor(private vile : VilleQuartierService ){}


    @Post('quatier')

       async quatier(
  
              @Body('nom_ville_quartier') nom_ville_quartier: string){
    
                 console.log(nom_ville_quartier)

                 await this.vile.createVille(nom_ville_quartier)

               } 
}
