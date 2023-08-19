import { Injectable } from '@nestjs/common';
import { Rapport } from 'src/models/rapport.model';

@Injectable()
export class RapportService {

    async createRapport( id_utilisateur: number, statut: string) {

        const rap = new Rapport();
        rap.id_utilisateur= id_utilisateur,
        rap.statut= statut,

        console.log(rap);
        return await rap.save()
         }
}
