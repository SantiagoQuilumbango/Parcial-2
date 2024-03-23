import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ModelosService } from './modelos.service'; // Cambio de nombre del servicio a ModelosService
import { ModelosDTO } from './dto/modelos.dto'; // Cambio de nombre del DTO a ModelosDTO
import { ApiTags } from '@nestjs/swagger';
@ApiTags('modelos') // Cambio de etiqueta a 'modelos'
@Controller('api/v1/modelos') // Cambio de ruta a 'api/v1/modelos'
export class ModelosController { // Cambio de nombre de clase a ModelosController
  constructor(private readonly modelosService: ModelosService) {} // Cambio de nombre de servicio a modelosService

  @Post()
  insertar(@Body() modelosDTO: ModelosDTO) { // Cambio de DTO a ModelosDTO
    return this.modelosService.insertar(modelosDTO); // Cambio de servicio a modelosService
  }

  @Get()
  todos() {
    return this.modelosService.todos(); // Cambio de servicio a modelosService
  }

  @Get(':id')
  uno(@Param('id') id: string) {
    return this.modelosService.uno(id); // Cambio de servicio a modelosService
  }

  @Put(':id')
  actualizar(@Param('id') id: string, @Body() modelosDTO: ModelosDTO) { // Cambio de DTO a ModelosDTO
    return this.modelosService.actualizar(id, modelosDTO); // Cambio de servicio a modelosService
  }

  @Delete(':id')
  eliminar(@Param('id') id: string) {
    return this.modelosService.eliminar(id); // Cambio de servicio a modelosService
  }
}
