export class Content {
  private readonly content: string;

  get Value(): string {
    return this.content;
  }

  private ValidateContent(content: string): boolean {
    return content.length >= 5 && content.length <= 200;
  }

  constructor(content: string) {
    if (!this.ValidateContent(content)) {
      throw new Error('Conteudo deve ser maior ou igual a 5');
    } else {
      this.content = content;
    }
  }
}
