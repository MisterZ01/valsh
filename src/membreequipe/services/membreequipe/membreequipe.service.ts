import { Injectable } from '@nestjs/common';
import { Membreequipe } from 'src/models/membreequipe.model';

@Injectable()
export class MembreequipeService {

    async createMembre( nom: string, prenom: string, fonction: string, id_equipe: number, id_rapport: number) {

        const mbreq = new Membreequipe();
        mbreq.nom= nom;
        mbreq.prenom= prenom;
        mbreq.fonction= fonction;
        mbreq.id_equipe= id_equipe;
        mbreq.id_rapport= id_rapport;
        console.log(mbreq);
        return await mbreq.save()


         }
}
