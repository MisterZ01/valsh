// import { Accessibilite } from 'src/models/accessibilite.model';
import { Injectable } from '@nestjs/common';
import { Accessibilite } from 'src/models/accessibilite.model';

@Injectable()
export class AccessibiliteService {

    async createAccess(cheminaccess: string) {

        const access = new Accessibilite();
        access.cheminaccess= cheminaccess;

        console.log(access);
        return await access.save()


         }
}

