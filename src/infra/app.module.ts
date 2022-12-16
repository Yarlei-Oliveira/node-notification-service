import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { httpModule } from './http/http.module';

@Module({
  imports: [DatabaseModule, httpModule],
})
export class AppModule {}
