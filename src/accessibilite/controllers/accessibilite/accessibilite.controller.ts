import { Body, Controller, Post } from '@nestjs/common';
import { AccessibiliteService } from 'src/accessibilite/services/accessibilite/accessibilite.service';
// import { AccessibiliteService } from 'src/accessibilite/services/accessibilite/accessibilite.service';

@Controller('accessibilite')
export class AccessibiliteController {

    constructor(private accessible : AccessibiliteService ){}


    @Post('accessibilite')

       async accessibilite(
  
              @Body('cheminaccess') cheminaccess: string ){
    
                 console.log(cheminaccess)

                 await this.accessible.createAccess(cheminaccess)

               } 
}









