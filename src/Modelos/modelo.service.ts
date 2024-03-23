import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MODELOS } from 'src/models/models'; // Cambio de nombre del modelo a MODELOS
import { IModelo } from './modelo.interface'; // Cambio de nombre de la interfaz a IModelo
import { ModeloDTO } from './dto/modelo.dto'; // Cambio de nombre del DTO a ModeloDTO

@Injectable()
export class ModelosService { // Cambio de nombre del servicio a ModelosService
  constructor(
    @InjectModel(MODELOS.name) private readonly model: Model<IModelo>, // Cambio de nombre del modelo a MODELOS, y de la interfaz a IModelo
  ) {}

  async insertar(modeloDTO: ModeloDTO): Promise<IModelo> { // Cambio de nombre del método a insertar, y del DTO a ModeloDTO
    const newModelo = new this.model(modeloDTO); // Cambio de nombre del DTO a ModeloDTO
    return await newModelo.save();
  }
  
  async todos(): Promise<IModelo[]> { // Cambio de nombre del método a todos, y de la interfaz a IModelo
    return await this.model.find();
  }
  
  async uno(id: string): Promise<IModelo> { // Cambio de nombre del método a uno, y de la interfaz a IModelo
    return await this.model.findById(id);
  }
  
  async actualizar(id: string, modeloDTO: ModeloDTO): Promise<IModelo> { // Cambio de nombre del método a actualizar, y del DTO a ModeloDTO
    return await this.model.findByIdAndUpdate(id, modeloDTO, { new: true });
  }
  
  async eliminar(id: string) { // Cambio de nombre del método a eliminar
    await this.model.findByIdAndDelete(id);
    return { status: HttpStatus.OK, message: 'Eliminado' };
  }
}
