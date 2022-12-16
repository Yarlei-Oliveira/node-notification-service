import { Content } from './content';
import { Notification } from './notifications';

// it('should be able to create a notification content', () => {
//   const content = new Content('s');

//   expect(content).toThrow;
// });

it('should be able to create a notification entity', () => {
  const content = new Notification({
    recipientId: 'recipient-id-teste',
    category: 'teste',
    content: new Content('voce recebeu uma notificação de amizade'),
  });
  console.log(content);
  expect(content).toBeTruthy();
});
