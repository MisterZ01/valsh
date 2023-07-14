import { Injectable } from '@nestjs/common';
import { Rapport } from 'src/models/rapport.model';

@Injectable()
export class RapportService {

    async createRapport( titre_rapport: string, date_debut: Date, statut: string, date_finition: Date) {

        const rap = new Rapport();
        rap.titre_rapport= titre_rapport,
        rap.date_debut= date_debut,
        rap.statut= statut,
        rap.date_finition= date_finition

        console.log(rap);
        return await rap.save()
         }
}
