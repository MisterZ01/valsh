import { Injectable } from '@nestjs/common';
import { Terrasse_sol } from 'src/models/terrasse_sol.model';

@Injectable()
export class TerrasseService {

    async createTerrasse( hauteurterrasse: number, etatterrasse: string, revetement_espace: string) {

        const ter = new Terrasse_sol();
        ter.hauteurterrasse= hauteurterrasse;
        ter.etatterrasse= etatterrasse;
        ter.revetement_espace= revetement_espace;

        console.log(ter);
        return await ter.save()


         }
}
