import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CLIENTES } from 'src/models/models'; // Cambio de modelo a CLIENTES
import { IClientes } from './clientes.interface'; // Cambio de interfaz a IClientes
import * as bcrypt from 'bcrypt';
import { ClientesDTO } from './dto/clientes.dto'; // Cambio de DTO a ClientesDTO

@Injectable()
export class ClientesService { // Cambio de nombre de clase a ClientesService
  constructor(@InjectModel(CLIENTES.name) private readonly modelo: Model<IClientes>) {} // Cambio de modelo a CLIENTES.name e interfaz a IClientes

  async insertar(clientesDTO: ClientesDTO): Promise<IClientes> { // Cambio de DTO a ClientesDTO
    const newCliente = new this.modelo(clientesDTO);
    return await newCliente.save();
  }

  async todos(): Promise<IClientes[]> {
    return await this.modelo.find();
  }

  async uno(id: string): Promise<IClientes> {
    return await this.modelo.findById(id);
  }

  async actualizar(id: string, clientesDTO: ClientesDTO): Promise<IClientes> { // Cambio de DTO a ClientesDTO
    return await this.modelo.findByIdAndUpdate(id, clientesDTO, { new: true });
  }

  async eliminar(id: string) {
    await this.modelo.findByIdAndDelete(id);
    return { status: HttpStatus.OK, msg: 'Cliente eliminado' }; // Cambio de mensaje a 'Cliente eliminado'
  }

  async buscarPorNombre(nombre: string) { // Cambio de nombre de función a buscarPorNombre
    return await this.modelo.findOne({ Nombre: nombre }); // Cambio de atributo a Nombre
  }
}
