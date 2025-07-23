import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModule } from './todos/todos.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://parthasrikar853:M5ijgO8Qk9cKwtvg@cluster0.f3lp2d1.mongodb.net/'), TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
