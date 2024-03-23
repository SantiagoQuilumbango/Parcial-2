import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ALQUILERES } from 'src/models/models'; // Cambio de modelo a ALQUILERES
import { IAlquileres } from './alquileres.interface'; // Cambio de interfaz a IAlquileres
import { AlquileresDTO } from './dto/alquileres.dto'; // Cambio de DTO a AlquileresDTO

@Injectable()
export class AlquileresService { // Cambio de nombre de clase a AlquileresService
  constructor(
    @InjectModel(ALQUILERES.name) private readonly model: Model<IAlquileres>, // Cambio de modelo a ALQUILERES.name e interfaz a IAlquileres
  ) {}

  async insertar(alquileresDTO: AlquileresDTO): Promise<IAlquileres> { // Cambio de DTO a AlquileresDTO y retorno a IAlquileres
    const nuevoAlquiler = new this.model(alquileresDTO);
    return nuevoAlquiler.save();
  }

  async todos(): Promise<IAlquileres[]> { // Cambio de retorno a IAlquileres[]
    return this.model.find();
  }

  async uno(id: string): Promise<IAlquileres> { // Cambio de retorno a IAlquileres
    return this.model.findById(id);
  }

  async actualizar(id: string, alquileresDTO: AlquileresDTO): Promise<IAlquileres> { // Cambio de DTO a AlquileresDTO y retorno a IAlquileres
    return this.model.findByIdAndUpdate(id, alquileresDTO, { new: true });
  }

  async eliminar(id: string) { // Cambio de retorno a Promise<void>
    await this.model.findByIdAndDelete(id);
    return { status: HttpStatus.OK, msg: 'Alquiler eliminado' }; // Cambio de mensaje a 'Alquiler eliminado'
  }

  async insertarPasajero( // Mantenimiento de la función insertarPasajero
    alquilerId: string, // Cambio de variable a alquilerId
    passengerId: string,
  ): Promise<IAlquileres> {
    return await this.model
      .findByIdAndUpdate(
        alquilerId, // Cambio de variable a alquilerId
        { $addToSet: { passengers: passengerId } },
        { new: true },
      );
  }
}
