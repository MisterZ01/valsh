import { Injectable } from '@nestjs/common';
import { Rapport } from 'src/models/rapport.model';
import { Membreequipe } from 'src/models/membreequipe.model';

@Injectable()
export class RapportService {

    //creer un rapport et renvoyer le ID
    async createRapport( id_utilisateur: number, statut: string, titre_rapport: string) {

        const rap = new Rapport();
        rap.id_utilisateur= id_utilisateur,
        rap.statut= statut,
        rap.titre_rapport= titre_rapport,

        console.log(rap);
        await rap.save();
        const dernierRapport = await Rapport.findOne({ order: [['createdAt', 'DESC']] });
        return dernierRapport ? dernierRapport.id : null;

         }
// lister tous les rapport
async findAll(){
    const rapports = Rapport.findAll();
    console.log(rapports);
    return rapports ;
}
// Afficher un rapport à partir de son Id
async findOneById(id: number){
    // recherche dans les differentes tables
     const rapport =  Rapport.findOne({ where: { id } });
     const membreequipe =  Membreequipe.findAll({ where: { id_rapport : id } });

    // Combinaisons des resultats
    const RapportComplet: any[] = [];
    if (rapport) RapportComplet.push((await rapport).toJSON());
    if (membreequipe) RapportComplet.push((await membreequipe)); // A revoir .......

    // retrour des resultats combinés
    return RapportComplet
  }
}
