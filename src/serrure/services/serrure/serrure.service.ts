import { Injectable } from '@nestjs/common';
import { Serrure } from 'src/models/serrure.model';

@Injectable()
export class SerrureService {


        async createSerrure( presence_serrure: string, etat_serrure: string, telemetrie: string) {

        const serr = new Serrure();
        serr.presence_serrure= presence_serrure;
        serr.etat_serrure= etat_serrure;
        serr.telemetrie= telemetrie;

        console.log(serr);
        return await serr.save()


         }
}
