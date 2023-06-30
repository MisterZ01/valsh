import { Injectable } from '@nestjs/common';
import { Garde_corps } from 'src/models/garde_corps.model';

@Injectable()
export class GardeCorpsService {

    async createGarde(presence_garde_corps: string, etat_garde_corps: string) {

        const gard = new Garde_corps();
        gard.presence_garde_corps= presence_garde_corps,
        gard.etat_garde_corps= etat_garde_corps,

        console.log(gard);
        return await gard.save()


         }
}
