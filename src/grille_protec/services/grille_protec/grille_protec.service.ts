import { Injectable } from '@nestjs/common';
import { Grille_protec } from 'src/models/grille_protec.model';

@Injectable()
export class GrilleProtecService {

    async createGrille(presence_grille: string, etat_grille_protec: string, observation: string) {

        const grille = new Grille_protec();
        grille.presence_grille= presence_grille,
        grille.etat_grille= etat_grille_protec,
        grille.observation= observation,

        console.log(grille);
        return await grille.save()


         }
}
