import { Notification } from '../../src/app/entities/notifications';
import { CreateNotificationRepository } from '../../src/app/repositories/notifications-repositories';

export class RepositoryImplementaion implements CreateNotificationRepository {
  public listNotifications: Notification[] = [];
  public listDeleteNotification: Notification[] = [];

  async findById(notificationId: string): Promise<Notification | null> {
    const notification =
      this.listNotifications.find((element) => element.id === notificationId) ||
      null;
    return notification;
  }
  async save(notificaiton: Notification): Promise<void> {
    const index = this.listNotifications.indexOf(notificaiton);
    console.log('index é igual a ', index);
    this.listNotifications.splice(index, 1);
    this.listDeleteNotification.push(notificaiton);
  }

  async create(notification: Notification): Promise<void> {
    this.listNotifications.push(notification);
    console.log(notification);
  }
}
