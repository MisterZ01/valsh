import { Injectable } from '@nestjs/common';
import { Etancheitesite } from 'src/models/etancheitesite.model';

@Injectable()
export class EtancheitesiteService {

    async createEtancheitesite(presence_etancheitesite: string, etat_etancheitesite: string) {

        const etansite = new Etancheitesite();
        etansite.presence_etancheitesite= presence_etancheitesite,
        etansite.etat_etancheitesite= etat_etancheitesite

        console.log(etansite);
        return await etansite.save()


         }
}
