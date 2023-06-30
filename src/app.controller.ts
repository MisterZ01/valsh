// import { Body, Get, UploadedFile, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
// import { FileInterceptor } from '@nestjs/platform-express';
// import { diskStorage } from 'multer';
// import { extname } from 'path';
import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('App')
export class AppController {
  authService: any;

  constructor(private readonly appService: AppService) {}

  getHello(): any {
    throw new Error('Method not implemented.');
  }

  // @UseGuards(AuthGuard('local'))
  // @Post('auth/login')
  // async login(@Request() req) {
  //   return this.authService.login(req.user);
  // }
  // @Get()
  // async getAPP() {
  //   return await this.appService.getHello();
  // }

  // @Post('/file')

  // @UseInterceptors(
    
  //   FileInterceptor('file', {

  //   storage: diskStorage({

  //     destination: './files',

  //     filename: (req, file, callback) => {

  //       const uniqueSuffix = 
  //         Date.now() + '-' + Math.round(Math.random() * 1e9);

  //       const ext = extname (file.originalname);

  //       const filename = '${file.originalname}-${uniqueSuffix}${ext}';
        
  //       callback(null, filename);

  //     },

  //   }),

  // }),

  // )
  // handleUpload(@UploadedFile() file: Express.Multer.File){

  //   console.log('file', file)
  //   return "File upload Api";
  // }

}
