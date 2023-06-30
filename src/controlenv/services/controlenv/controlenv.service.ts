import { Injectable } from '@nestjs/common';
import { Controlenv } from 'src/models/controlenv.model';

@Injectable()
export class ControlenvService {

    async createControl( datecontrole: Date, heuredebutcontrole: string, heurefincontrole: string) {

        const cont = new Controlenv();
        cont.datecontrole= datecontrole;
        cont.heuredebutcontrole= heuredebutcontrole;
        cont.heurefincontrole= heurefincontrole;

        console.log(cont);
        return await cont.save()


         }
}
