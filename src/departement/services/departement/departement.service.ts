import { Injectable } from '@nestjs/common';
import { Departement } from 'src/models/departement.model';

@Injectable()
export class DepartementService {

    
    async createDepartement( nom_departement: string) {

        const dept = new Departement();
        dept.nom_departement= nom_departement

        console.log(dept);
        return await dept.save()

         }
}
