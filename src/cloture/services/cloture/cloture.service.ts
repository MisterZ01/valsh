import { Injectable } from '@nestjs/common';
import { Cloture } from 'src/models/cloture.model';

@Injectable()
export class ClotureService {

    
    async createCloture(presence_cloture: string, etat_cloture: string, type_cloture: string) {

        const clot = new Cloture();
        clot.presence_cloture= presence_cloture;
        clot.etat_cloture= etat_cloture;
        clot.type_cloture= type_cloture;

        console.log(clot);
        return await clot.save()


         }
}
