import { Injectable } from '@nestjs/common';
import { Site } from 'src/models/site.model';

@Injectable()
export class SiteService {

    
    async createSite( typenv: string, nomsite: string, situationgeo: string, densite : string, typologie : string, station: string, localtec: string, plaqueident : string, datemiseservice : Date, hauteurbatiment : string, latitude : string,
        longitude: string, altitude: string, vigile: string, nbrevigile: number, societegardiennagevigile: string, typstation:string, observation: string ) {

        const sit = new Site();
        sit.typenv= typenv;
        sit.nomsite= nomsite;
        sit.situationgeo= situationgeo;
        sit.densite= densite;
        sit.typologie= typologie;
        sit.station= station,
        sit.localtec= localtec,
        sit.plaqueident= plaqueident;
        sit.datemiseservice= datemiseservice;
        sit.hauteurbatiment= hauteurbatiment;
        sit.latitude= latitude;
        sit.longitude= longitude;
        sit.altitude= altitude;
        sit.vigile= vigile;
        sit.nbrevigile= nbrevigile;
        sit.societegardiennagevigile= societegardiennagevigile;
        sit.typstation= typstation,
        sit.observation= observation;
        console.log(sit);
        return await sit.save()
         }
}