import { Notification } from '../entities/notifications';

export abstract class CreateNotificationRepository {
  abstract create(notification: Notification): Promise<void>;
  abstract findById(notificationId: string): Promise<Notification | null>;
  abstract save(notificaiton: Notification): Promise<void>;
}
