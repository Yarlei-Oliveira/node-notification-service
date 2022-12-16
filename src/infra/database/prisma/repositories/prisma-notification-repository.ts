import { Injectable } from '@nestjs/common';
import { Notification } from 'src/app/entities/notifications';
import { CreateNotificationRepository } from 'src/app/repositories/notifications-repositories';
import { PrismaNotificationMapper } from '../mappers/prisma-notification-mapper';
import { PrismaService } from '../prisma.service';
@Injectable()
export class PrismaNotificationRepository
  implements CreateNotificationRepository
{
  constructor(private prismaService: PrismaService) {}
  async save(notificaiton: Notification): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async findById(notificationId: string): Promise<Notification | null> {
    throw new Error('Method not implemented.');
  }
  async create(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification);
    await this.prismaService.notification.create({
      data: raw,
    });
  }
}
