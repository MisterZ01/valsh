import { Injectable } from '@nestjs/common';
import { Membreequipe } from 'src/models/membreequipe.model';

@Injectable()
export class MembreequipeService {

    async createMembre( nom: string, prenom: string, fonction: string) {

        const mbreq = new Membreequipe();
        mbreq.nom= nom;
        mbreq.prenom= prenom;
        mbreq.fonction= fonction;
        console.log(mbreq);
        return await mbreq.save()


         }
}
