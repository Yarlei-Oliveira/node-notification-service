import { randomUUID } from 'crypto';
import { Replace } from 'src/app/utils/replace';
import { Content } from './content';

export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  deleteAt?: Date | null;
  readAt?: Date | null;
  createAt: Date;
}

export class Notification {
  private _id: string;
  private props: NotificationProps;

  constructor(props: Replace<NotificationProps, { createAt?: Date }>) {
    this._id = randomUUID();
    this.props = {
      ...props,
      createAt: props.createAt ?? new Date(),
    };
  }

  public cancel() {
    this.props.deleteAt = new Date();
  }

  public get deleteAt(): Date | null | undefined {
    return this.props.deleteAt;
  }

  public get id(): string {
    return this._id;
  }

  public set recipientId(content: string) {
    this.props.recipientId = content;
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }

  public set content(content: Content) {
    this.props.content = content;
  }

  public get content(): Content {
    return this.props.content;
  }

  public set category(content: string) {
    this.props.category = content;
  }

  public get category(): string {
    return this.props.category;
  }

  public set readAt(content: Date | undefined | null) {
    this.props.readAt = content;
  }

  public get readAt(): Date | undefined | null {
    return this.props.readAt;
  }
  public set creatAt(content: Date) {
    this.props.readAt = content;
  }

  public get creatAt(): Date {
    return this.props.createAt;
  }
}
