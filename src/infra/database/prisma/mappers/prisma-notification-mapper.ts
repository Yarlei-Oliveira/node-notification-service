import { Notification } from 'src/app/entities/notifications';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      recipientId: notification.recipientId,
      content: notification.content.Value,
      category: notification.category,
    };
  }
}
