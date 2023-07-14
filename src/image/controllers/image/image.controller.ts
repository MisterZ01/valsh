import { Body, Controller, Get, Param, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { ImagesService } from 'src/image/services/images/images.service';

@Controller('image')
export class ImageController {


    constructor(private siteServ: ImagesService) { }


    @Post('image')

    @UseInterceptors(
        FileInterceptor('image_site',
          {
            dest: './uploads',
            storage: diskStorage({
    
              destination: './uploads',
    
              filename: (req, file, callback) => {
    
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    
                const ext = extname(file.originalname);
    
                const filename = uniqueSuffix + file.originalname;
                callback(null, filename);
    
              },
    
            }),
    
          }),
      )
      async uploadSingleFileWithPost(@UploadedFile() file, @Body() body) {
        const description_site = body.description_site;
        const image_site = file.filename;
        // affichage des elements de test
        console.log(description_site, image_site)
        // enregistrement des informations de l'utilisateur
        await this.siteServ.createImgSite(description_site, image_site)
    
      }

      @Get('profile-image/:imageName')
      display(@Param('imageName') imagename,@Res() res){
          res.sendFile(imagename,{ root: './uploads' })
      }
}
