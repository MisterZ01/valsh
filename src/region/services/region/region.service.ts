import { Region } from 'src/models/region.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RegionService {

     
    async createRegion( nom_region: string) {

        const reg= new Region();
        reg.nom_region= nom_region

        console.log(reg);
        return await reg.save()

         }
}
