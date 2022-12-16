import { Module } from '@nestjs/common';
import { CreateNotificationRepository } from 'src/app/repositories/notifications-repositories';
import { PrismaService } from './prisma/prisma.service';
import { PrismaNotificationRepository } from './prisma/repositories/prisma-notification-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: CreateNotificationRepository,
      useClass: PrismaNotificationRepository,
    },
  ],
  exports: [CreateNotificationRepository],
})
export class DatabaseModule {}
