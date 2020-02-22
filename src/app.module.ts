import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecetaModule } from './Receta/receta.module';
import { MongooseModule } from '@nestjs/mongoose';
import { WebModule } from './web/web.module';

@Module({
  imports: [RecetaModule, MongooseModule.forRoot('mongodb://mongodb:27107'), WebModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
