import { Notification } from '../../src/app/entities/notifications';
import { CreateNotificationRepository } from '../../src/app/repositories/notifications-repositories';

export class RepositoryImplementaion implements CreateNotificationRepository {
  public listNotifications: Notification[] = [];

  async create(notification: Notification): Promise<void> {
    this.listNotifications.push(notification);
    console.log(this.listNotifications);
  }
}
