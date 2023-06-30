import { Injectable } from '@nestjs/common';
import { Commune } from 'src/models/commune.model';

@Injectable()
export class CommuneService {

    async createCommune( nom_commune: string) {

        const com = new Commune();
        com.nom_commune= nom_commune

        console.log(com);
        return await com.save()

         }
}
