import { Body, Controller, Get, Param, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { ImagesService } from 'src/image/services/images/images.service';

@Controller('image')
export class ImageController {


    constructor(private siteServ: ImagesService) { }


    @Post('image')

       async createImgSite(
  
              @Body('image_site') image_site: string,
              @Body('description_site') description_site: string,
              @Body('id_controlenv') id_controlenv: number,
              @Body('id_rapport') id_rapport: number){
    
                 console.log(image_site, description_site, id_controlenv, id_rapport)

                 await this.siteServ.createImgSite(image_site, description_site, id_controlenv, id_rapport)

               } 
}
