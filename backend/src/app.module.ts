import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModule } from './todos/todos.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/todoapp'), TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
