import { Injectable } from '@nestjs/common';
import { Operateur } from 'src/models/operateur.model';

@Injectable()
export class OperateurService {

    async createOperateur( nomoperateur: string, typelocal : string) {

        const oper = new Operateur();
        oper.nomoperateur= nomoperateur;
        oper.typelocal= typelocal;

        console.log(oper);
        return await oper.save()


         }
}
