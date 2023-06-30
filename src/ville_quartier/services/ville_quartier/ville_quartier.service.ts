import { Ville_quartier } from 'src/models/ville_quartier.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class VilleQuartierService {

    
    async createVille( nom_ville_quartier: string) {

        const vil = new Ville_quartier();
        vil.nom_ville_quartier= nom_ville_quartier

        console.log(vil);
        return await vil.save()

         }
}
