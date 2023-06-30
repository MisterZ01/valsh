import { Injectable } from '@nestjs/common';
import { Rapport } from 'src/models/rapport.model';

@Injectable()
export class RapportService {

    async createRapport( titre_rapport: string, date_finition: Date) {

        const rap = new Rapport();
        rap.titre_rapport= titre_rapport,
        rap.date_finition= date_finition

        console.log(rap);
        return await rap.save()


         }
}
