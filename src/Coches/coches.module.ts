import { Module } from '@nestjs/common';
import { CochesController } from './coches.controller'; // Cambio de controlador a CochesController
import { CochesService } from './coches.service'; // Cambio de servicio a CochesService
import { MongooseModule } from '@nestjs/mongoose';
import { COCHES } from 'src/models/models'; // Cambio de modelo a COCHES
import { CochesSchema } from './schema/coches.schema'; // Cambio de esquema a CochesSchema
import { PassengerModule } from 'src/passenger/passenger.module';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: COCHES.name, // Cambio de nombre de modelo a COCHES.name
        useFactory: () => CochesSchema.plugin(require('mongoose-autopopulate')), // Cambio de esquema a CochesSchema
      },
    ]),
    PassengerModule,
  ],
  controllers: [CochesController], // Cambio de controlador a CochesController
  providers: [CochesService], // Cambio de servicio a CochesService
})
export class CochesModule {} // Cambio de nombre de módulo a CochesModule
