import { Module } from '@nestjs/common';
import { ModelosController } from './modelos.controller'; // Cambio de nombre del controlador a ModelosController
import { ModelosService } from './modelos.service'; // Cambio de nombre del servicio a ModelosService
import { MongooseModule } from '@nestjs/mongoose';
import { MODELOS } from 'src/models/models'; // Cambio de nombre del modelo a MODELOS
import { ModelosSchema } from './schema/modelos.schema'; // Cambio de nombre del esquema a ModelosSchema

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: MODELOS.name, // Cambio de nombre del modelo a MODELOS
        useFactory: () => ModelosSchema, // Cambio de nombre del esquema a ModelosSchema
      },
    ]),
  ],
  controllers: [ModelosController], // Cambio de nombre del controlador a ModelosController
  providers: [ModelosService], // Cambio de nombre del servicio a ModelosService
  exports: [ModelosService], // Cambio de nombre del servicio a ModelosService
})
export class ModelosModule {} // Cambio de nombre del módulo a ModelosModule
