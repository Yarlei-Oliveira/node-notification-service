import { Module } from '@nestjs/common';
import { SendNotification } from 'src/app/use-cases/send-notifications';
import { DatabaseModule } from '../database/database.module';
import { NotificationController } from './controller/notifications.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationController],
  providers: [SendNotification],
})
export class httpModule {}
