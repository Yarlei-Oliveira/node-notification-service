import { Injectable } from '@nestjs/common';
import { Notification } from '../entities/notifications';
import { CreateNotificationRepository } from '../repositories/notifications-repositories';
import { NotificationNotFound } from './error/notification-notFound';

interface DeleteNotificationRequest {
  notificationId: string;
}

interface DeleteNotificationResponse {
  notification: Notification;
}
@Injectable()
export class DeleteNotification {
  constructor(private repository: CreateNotificationRepository) {}
  async execute(
    request: DeleteNotificationRequest,
  ): Promise<DeleteNotificationResponse> {
    const { notificationId } = request;

    const notification = await this.repository.findById(notificationId);

    if (!notification) {
      throw new NotificationNotFound();
    }
    return { notification };
  }
}
