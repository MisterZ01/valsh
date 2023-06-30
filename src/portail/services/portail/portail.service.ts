import { Injectable } from '@nestjs/common';
import { Portail } from 'src/models/portail.model';

@Injectable()
export class PortailService {

    
    async createPortail(presence_portail: string, etat_portail: string, type_portail: string) {

        const port = new Portail();
        port.presence_portail= presence_portail;
        port.etat_portail= etat_portail;
        port.type_portail= type_portail;
        

        console.log(port);
        return await port.save()


         }
}
