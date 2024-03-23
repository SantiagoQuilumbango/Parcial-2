import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { COCHES } from 'src/models/models'; // Cambio de modelo a COCHES
import { ICoche } from './coches.interface'; // Cambio de interfaz a ICoche
import { CochesDTO } from './dto/coches.dto'; // Cambio de DTO a CochesDTO

@Injectable()
export class CochesService { // Cambio de nombre de clase a CochesService
  constructor(
    @InjectModel(COCHES.name) private readonly model: Model<ICoche>, // Cambio de nombre de modelo a COCHES.name y de interfaz a ICoche
  ) {}

  insertar(cochesDTO: CochesDTO): Promise<ICoche> { // Cambio de DTO a CochesDTO y de tipo de retorno a ICoche
    const nuevoCoche = new this.model(cochesDTO); // Cambio de nombre de variable a nuevoCoche
    return nuevoCoche.save(); // Cambio de retorno a nuevoCoche.save()
  }

  todos(): Promise<ICoche[]> {
    return this.model.find(); // Mantenimiento del método para todos los coches
  }

  uno(id: string): Promise<ICoche> {
    return this.model.findById(id); // Mantenimiento del método para un coche por ID
  }

  actualizar(id: string, cochesDTO: CochesDTO): Promise<ICoche> { // Cambio de DTO a CochesDTO y de tipo de retorno a ICoche
    return this.model.findByIdAndUpdate(id, cochesDTO, { new: true }); // Cambio de retorno a findByIdAndUpdate
  }

  async eliminar(id: string) {
    await this.model.findByIdAndDelete(id); // Cambio de método de eliminación a findByIdAndDelete
    return { status: HttpStatus.OK, msg: 'Coche eliminado' }; // Cambio de mensaje a 'Coche eliminado'
  }
}
