import { Body, Controller, Post } from '@nestjs/common';
import { CreateNotificationBody } from '../dto/create-notification-body';
import { SendNotification } from 'src/app/use-cases/send-notifications';
import { NotificationViewModel } from '../view-model/notification-view-model';

@Controller('notification')
export class NotificationController {
  constructor(private notificationSend: SendNotification) {}

  @Post()
  async postNotification(@Body() body: CreateNotificationBody) {
    const { category, content, recipientId } = body;

    const { notification } = await this.notificationSend.execute({
      category,
      content,
      recipientId,
    });

    return {
      notification: NotificationViewModel.toHTTP(notification),
    };
  }
}
