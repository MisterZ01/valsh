import { Injectable } from '@nestjs/common';
import { Evacuation } from 'src/models/evacuation.model';

@Injectable()
export class EvacuationService {

    async createEvacuation(presencesysteme_evacuation: string, etatsysteme_evacuation: string) {

        const evac = new Evacuation();
        evac.presencesysteme_evacuation= presencesysteme_evacuation,
        evac.etatsysteme_evacuation= etatsysteme_evacuation,

        console.log(evac);
        return await evac.save()


         }
}
