import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
// import { jwtConstants } from './constantes';
import { APP_GUARD } from '@nestjs/core';
import { AuthController } from './auth.controller';
import { UtilisateurModule } from 'src/utilisateur/utilisateur.module';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({

  imports: [
    UtilisateurModule,
    
  ], 
  providers: [
    AuthService,LocalStrategy

],
    controllers: [AuthController],
    exports: [AuthService],
 
})
export class AuthModule {}
