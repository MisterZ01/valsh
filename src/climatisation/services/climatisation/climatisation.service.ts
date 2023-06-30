import { Injectable } from '@nestjs/common';
import { Climatisation } from 'src/models/climatisation.model';

@Injectable()
export class ClimatisationService {

    async createClimatiseur(presenceclim: string, etatclim: string, nbreclim: number, typeclim: string, etancheiteconnexion: string, condenseur : string, tuyauterieclim : string ) {

        const clim = new Climatisation();
        clim.presenceclim= presenceclim;
        clim.etatclim= etatclim;
        clim.nbreclim= nbreclim;
        clim.typeclim= typeclim;
        clim.etancheiteconnexion= etancheiteconnexion;
        clim.condenseur= condenseur;
        clim.tuyauterieclim= tuyauterieclim;
        console.log(clim);
        return await clim.save()


         }
}
