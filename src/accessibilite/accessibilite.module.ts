import { Module } from '@nestjs/common';
import { AccessibiliteService } from './services/accessibilite/accessibilite.service';
import { AccessibiliteController } from './controllers/accessibilite/accessibilite.controller';


@Module({
  controllers: [AccessibiliteController],
  providers: [AccessibiliteService]
})
export class AccessibiliteModule {}
