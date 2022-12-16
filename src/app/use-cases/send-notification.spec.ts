import { RepositoryImplementaion } from '../../../test/repositories/in-memory-database-notification-repository';
import { SendNotification } from './send-notifications';

describe('send notifications', () => {
  it('should create and persist the notification', async () => {
    const notificationRepository = new RepositoryImplementaion();
    const sendNotification = new SendNotification(notificationRepository);

    await sendNotification.execute({
      category: 'teste',
      content: 'sei la contet',
      recipientId: ' sei la recipient Id',
    });

    expect(notificationRepository.listNotifications).toHaveLength(1);
  });
});
