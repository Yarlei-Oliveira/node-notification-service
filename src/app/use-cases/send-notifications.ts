import { Injectable } from '@nestjs/common';
import { Content } from '../entities/content';
import { Notification } from '../entities/notifications';
import { CreateNotificationRepository } from '../repositories/notifications-repositories';

interface NotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface NotificatoinResponse {
  notification: Notification;
}
@Injectable()
export class SendNotification {
  constructor(private repository: CreateNotificationRepository) {}
  async execute(request: NotificationRequest): Promise<NotificatoinResponse> {
    const { category, content, recipientId } = request;

    const notification = new Notification({
      category: category,
      content: new Content(content),
      recipientId: recipientId,
    });

    await this.repository.create(notification);

    return { notification };
  }
}
