import { Module } from '@nestjs/common';
import { AlquileresController } from './alquileres.controller'; // Cambio de controlador a AlquileresController
import { AlquileresService } from './alquileres.service'; // Cambio de servicio a AlquileresService
import { MongooseModule } from '@nestjs/mongoose';
import { ALQUILERES } from 'src/models/models'; // Cambio de modelo a ALQUILERES
import { AlquileresSchema } from './schema/alquileres.schema'; // Cambio de esquema a AlquileresSchema
import { PassengerModule } from 'src/passenger/passenger.module';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: ALQUILERES.name, // Cambio de nombre de modelo a ALQUILERES.name
        useFactory: () => AlquileresSchema.plugin(require('mongoose-autopopulate')), // Cambio de esquema a AlquileresSchema
      },
    ]),
    PassengerModule,
  ],
  controllers: [AlquileresController], // Cambio de controlador a AlquileresController
  providers: [AlquileresService], // Cambio de servicio a AlquileresService
})
export class AlquileresModule {} // Cambio de nombre de módulo a AlquileresModule
