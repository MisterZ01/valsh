import { Injectable } from '@nestjs/common';
import { Synthese } from 'src/models/synthese.model';

@Injectable()
export class SyntheseService {

    async createSynthese(partieconcernee: string, anormalies: string, recommandations: string) {

        const synt = new Synthese();
        synt.partieconcernee= partieconcernee;
        synt.anormalies= anormalies;
        synt.recommandations= recommandations;

        console.log(synt);
        return await synt.save()


         }
}
