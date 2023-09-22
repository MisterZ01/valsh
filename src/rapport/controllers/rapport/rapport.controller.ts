import { Body, Controller, Post , Get,Delete, Param, ParseIntPipe, Res, InternalServerErrorException} from '@nestjs/common';
import { RapportService } from 'src/rapport/services/rapport/rapport.service';
import {  Request  } from '@nestjs/common';
import {  Response  } from 'express';

@Controller('rapport')
export class RapportController {

    
    constructor(private rapp : RapportService ){}


    @Post('Creerrapport')

       async rapport(
  
              @Body('statut') statut: string,
              @Body('titre_rapport') titre_rapport: string,
              @Body('id_utilisateur') id_utilisateur: number,
              @Body('nom_operateur') nom_operateur: string){
              // @Body('logo_operateur') logo_operateur: number){
    
                 console.log( statut, id_utilisateur)

                 return await this.rapp.createRapport( id_utilisateur, statut, titre_rapport, nom_operateur )

               }

@Post('updaterapport')

    async updaterapport(

          @Body('id_rapport') id_rapport: number,
          @Body('titre_rapport') titre_rapport: string,
          @Body('id_utilisateur') id_utilisateur: number){

              return await this.rapp.updateRapport(id_rapport,id_utilisateur, titre_rapport )

            }
   // afficher la liste des rapports

  @Get('listrapport')
  findAll() {
    return this.rapp.findAll();
  }

   // retrouver un rapport par son ID
   @Get(':id')
   async findOneById(@Param('id', ParseIntPipe) id: number) {
     return this.rapp.findOneById(id);
   }
   // retrouver un unique rapport par son ID
   @Get('unique/:id')
   async findUniqueById(@Param('id', ParseIntPipe) id: number) {
     return this.rapp.findUniqueById(id);
   }

     // compter les rapport
  @Get('stat/count')
  async countReport(){
     const nombre_rapport = this.rapp.countReport();
     return nombre_rapport
  }

  @Get('image-site/:imageName')
  display(@Param('imageName') imagename,@Res() res){
      res.sendFile(imagename,{ root: './uploads' })
  }

  @Get('plansite/:imageName')
  display_z(@Param('imageName') imagename,@Res() res){
      res.sendFile(imagename,{ root: './uploads' })
  }


  // suppression d'un rapport
  
  @Delete('/delete/:id')

  async supprimerRapport(@Param('id') id: number, @Res() res: Response) {
    try {
      const result = await this.rapp.DeleteReportById(id);

      if (result.status === 'success') {
        res.status(204).end(); // Use 204 (No Content) status for successful deletions
      } else {
        res.status(404).json({ error: result.message });
      }
    } catch (error) {
      // Handle any unexpected errors
      console.error(error);
      throw new InternalServerErrorException('Une erreur est survenu sur le serveur');
    }
  }


}