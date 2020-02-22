import { Module } from '@nestjs/common';
import { RecetaController } from './receta.controller';
import { RecetaService } from './receta.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RecetasSchema } from './schemas/recetas.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Receta', schema: RecetasSchema }])],
  controllers: [RecetaController],
  providers: [RecetaService],
  exports: [RecetaService]
})
export class RecetaModule {}
