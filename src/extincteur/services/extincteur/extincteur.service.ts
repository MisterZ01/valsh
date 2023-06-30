import { Injectable } from '@nestjs/common';
import { Extincteur } from 'src/models/extincteur.model';

@Injectable()
export class ExtincteurService {

    async createExtincteur(presence_extincteur: string, validite: string, nbre_extincteur:number) {

        const ext = new Extincteur();
        ext.presence_extincteur= presence_extincteur,
        ext.validite= validite,
        ext.nbre_extincteur= nbre_extincteur,

        console.log(ext);
        return await ext.save()
         }
}
