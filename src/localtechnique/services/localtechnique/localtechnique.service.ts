import { Injectable } from '@nestjs/common';
import { Localtechnique } from 'src/models/localtechnique.model';

@Injectable()
export class LocaltechniqueService {

    async createLocal( etatlocal: string, typelocal: string, etatboulonnerie: string, etatassessoire : string ) {

        const local = new Localtechnique();
        local.etatlocal= etatlocal;
        local.typelocal= typelocal;
        local.etatboulonnerie= etatboulonnerie;
        local.etatassessoire= etatassessoire;
        console.log(local);
        return await local.save()


         }
}
