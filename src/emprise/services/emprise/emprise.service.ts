import { Injectable } from '@nestjs/common';
import { Emprise } from 'src/models/emprise.model';

@Injectable()
export class EmpriseService {

    async createEmprise(presence_proximite_emprise: string, nom_emprise: string, precision_emprise: string,  distancesite_emprise: number) {

        const emp = new Emprise();
        emp.presence_proximite_emprise= presence_proximite_emprise;
        emp.nom_emprise= nom_emprise;
        emp.precision_emprise= precision_emprise;
        emp.distancesite_emprise= distancesite_emprise;

        console.log(emp);
        return await emp.save()


         }
}
