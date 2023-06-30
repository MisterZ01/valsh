import { Module } from '@nestjs/common';
import { AuthService } from '../authent/auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../authent/constantes';
import { APP_GUARD } from '@nestjs/core';
import { AuthController } from '../authent/auth/auth.controller';
import { AuthGuard } from '../authent/auth.guard';
import { UtilisateurService } from 'src/utilisateur/services/utilisateur/utilisateur.service';
import { UtilisateurModule } from 'src/utilisateur/utilisateur.module';

@Module({

  imports: [
    UtilisateurModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }), 
    
  ], 
  exports: [AuthService],
  providers: [
    AuthService,
    {
    provide: APP_GUARD,
    useClass: AuthGuard,
    
  },
],
    // providers: [AuthService],
    controllers: [AuthController],
 
})
export class AuthentModule {}
