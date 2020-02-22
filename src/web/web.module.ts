import { Module } from '@nestjs/common';
import { WebController } from './web.controller';
import { RecetaModule } from 'src/receta/receta.module';

@Module({
  imports: [RecetaModule],
  controllers: [WebController]
})
export class WebModule {}
