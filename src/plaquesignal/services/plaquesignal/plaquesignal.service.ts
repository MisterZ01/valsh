import { Injectable } from '@nestjs/common';
import { Plaquesignal } from 'src/models/plaquesignal.model';

@Injectable()
export class PlaquesignalService {

        
    async createPlaque(presence_plaquesignal: string, etat_plaquesignal: string) {

        const plq = new Plaquesignal();
        plq.presence_plaquesignal= presence_plaquesignal,
        plq.etat_plaquesignal= etat_plaquesignal

        console.log(plq);
        return await plq.save()


         }
}
