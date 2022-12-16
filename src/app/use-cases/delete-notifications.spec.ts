import { RepositoryImplementaion } from '../../../test/repositories/in-memory-database-notification-repository';
import { Content } from '../entities/content';
import { Notification } from '../entities/notifications';
import { DeleteNotification } from './delete-notification';
import { SendNotification } from './send-notifications';

describe('send notifications', () => {
  it('should create and persist the notification', async () => {
    const notificationRepository = new RepositoryImplementaion();
    const deleteNotification = new DeleteNotification(notificationRepository);

    const newNotification = new Notification({
      category: 'teste',
      content: new Content('teste content'),
      recipientId: ' sei la recipient Id',
    });

    await deleteNotification.execute({
      notificationId: newNotification.id,
    });

    expect(notificationRepository.listNotifications).toHaveLength(0);
  });
});
