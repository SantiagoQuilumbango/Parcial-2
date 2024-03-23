import { Module } from '@nestjs/common';
import { ClientesController } from './clientes.controller'; // Cambio de controlador a ClientesController
import { ClientesService } from './clientes.service'; // Cambio de servicio a ClientesService
import { MongooseModule } from '@nestjs/mongoose';
import { CLIENTES } from 'src/models/models'; // Cambio de modelo a CLIENTES
import { ClientesSchema } from './schema/clientes.schema'; // Cambio de esquema a ClientesSchema

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: CLIENTES.name, // Cambio de nombre de modelo a CLIENTES.name
        useFactory: () => {
          return ClientesSchema; // Cambio de esquema a ClientesSchema
        },
      },
    ]),
  ],
  controllers: [ClientesController], // Cambio de controlador a ClientesController
  providers: [ClientesService], // Cambio de servicio a ClientesService
  exports: [ClientesService], // Cambio de servicio a ClientesService
})
export class ClientesModule {} // Cambio de nombre de módulo a ClientesModule
