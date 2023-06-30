import { Injectable } from '@nestjs/common';
import { Systemeverrouillage } from 'src/models/systemeverrouillage.model';

@Injectable()
export class SystemeverrouillageService {

    async createVerrouillage(presencesysteme_verrouillage: string, etatsysteme_verrouillage: string) {

        const syst = new Systemeverrouillage();
        syst.presencesysteme_verrouillage= presencesysteme_verrouillage,
        syst.etatsysteme_verrouillage= etatsysteme_verrouillage,

        console.log(syst);
        return await syst.save()
         }
}
