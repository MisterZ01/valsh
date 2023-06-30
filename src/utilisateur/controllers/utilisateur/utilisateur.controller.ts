import { UtilisateurService } from 'src/utilisateur/services/utilisateur/utilisateur.service';
import { BadRequestException, Body, Controller, Get, Param, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
// import path, { extname } from 'path';
// import { Utilisateur } from 'src/models/utilisateur.model';
// import { error } from 'console';

@Controller('utilisateur')
export class UtilisateurController {

  constructor(private userServ : UtilisateurService ){}

@Post('inscription')

 async inscription(

  // lienphoto:any,
  
   @Body('nom_user') nom_user: string,
   @Body('prenom_user') prenom_user : string,
   @Body('email') email: string,
   @Body('contact') contact: number,
   @Body('profession') profession: string, 
   @Body('nom_utilisateur') nom_utilisateur: string,
   @Body('mdp') mdp: string,  
   @Body('profile') profile: string,
   @Body('image_users') image_users: string){
        
    console.log(mdp,email,profile,nom_user)


    await this.userServ.createUser(nom_user, prenom_user , email, contact, profession, 
      nom_utilisateur, mdp, profile, image_users)

    }


     
    // @UseInterceptors(
    //   FileInterceptor('file', 
    //   {
    //     dest: './uploads',
    //    storage: diskStorage({
  
    //      destination: './uploads',
  
    //      filename: (req, file, callback) => {
  
    //        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
  
    //        const ext = extname (file.originalname);
  
    //        const filename = '${file.originalname}-${uniqueSuffix}${ext}';
          
    //        callback(null, filename);
  
    //      },
  
    //    }),
  
    // })
    // )

    @Post('Uploadphoto')
    @UseInterceptors( FileInterceptor( "file", {
      storage: diskStorage( {
        destination:"./uploads", 
        filename: (_Req, file, cb)=> {
          const name= file.originalname.split( ".")[0];
          const fileExtension: string = file.originalname.split(".")[1];
          const newFileName: string = name.split("").join("_")+ ("_")+ Date.now()+"."+ fileExtension;

          cb( null, newFileName);
        }
      }),
    }))
    uploadPhoto(@UploadedFile() file: Express.Multer.File){
      if (!file){
        throw new BadRequestException("file is not an image");
      }else{
        const response = {
          filepath:'http://localhost:3000/posts/pictures/${file.filename}'
        };
        return response;
      }
    }

    // @Get('pictures/:filename')
    // async getPicture(@Param('filename') filename, @Res() res:Response){
    //   res.sendFile(filename, {root:'./uploads'});
    // }

    // handleUpload(@UploadedFile() file: Express.Multer.File){
  
    // console.log('file', file)
    // console.log("File upload Api")

    // }


// afficher la liste des utilisateurs

    @Get('listuser')
    findAll(){
      return this.userServ.findAll(); 
    }

  }
