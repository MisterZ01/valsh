import { Body, Controller, Post } from '@nestjs/common';
import { RegionService } from 'src/region/services/region/region.service';

@Controller('region')
export class RegionController {

    constructor(private regions : RegionService ){}


    @Post('region')

       async region(
  
              @Body('nom_region') nom_region: string){
    
                 console.log(nom_region)

                 await this.regions.createRegion(nom_region)

               } 
}
