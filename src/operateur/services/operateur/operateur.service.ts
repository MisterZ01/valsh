import { Injectable } from '@nestjs/common';
import { Operateur } from 'src/models/operateur.model';

@Injectable()
export class OperateurService {

    async createOperateur( nomoperateur: string, typelocal : string, id_rapport:number) {

        const oper = new Operateur();
        oper.nomoperateur= nomoperateur;
        oper.typelocal= typelocal;
        oper.id_rapport= id_rapport;

        console.log(oper);
        return await oper.save()


         }
}
