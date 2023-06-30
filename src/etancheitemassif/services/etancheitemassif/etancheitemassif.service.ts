import { Injectable } from '@nestjs/common';
import { Etancheitemassif } from 'src/models/etancheitemassif.model';

@Injectable()
export class EtancheitemassifService {

    async createEtancheitesite(presence_etancheitemassif: string, etat_etancheitemassif: string) {

        const etanmassif = new Etancheitemassif();
        etanmassif.presence_etancheitemassif= presence_etancheitemassif,
        etanmassif.etat_etancheitemassif= etat_etancheitemassif,

        console.log(etanmassif);
        return await etanmassif.save()


         }
}
