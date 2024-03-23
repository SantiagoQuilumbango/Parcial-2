import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { CochesService } from './coches.service'; // Cambio de servicio a CochesService
import { CochesDTO } from './dto/coches.dto'; // Cambio de DTO a CochesDTO
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('coches') // Cambio de etiqueta a 'coches'
@Controller('api/v1/coches') // Cambio de ruta base a 'api/v1/coches'
export class CochesController { // Cambio de nombre de clase a CochesController
  constructor(
    private readonly cochesService: CochesService, // Cambio de servicio a CochesService
  ) {}

  @Post()
  @ApiOperation({ summary: 'Crea Coches' }) // Cambio de resumen a 'Crea Coches'
  insertar(@Body() cochesDTO: CochesDTO) { // Cambio de DTO a CochesDTO
    return this.cochesService.insertar(cochesDTO); // Cambio de servicio a CochesService
  }

  @Get()
  @ApiOperation({ summary: 'Selecciona todos los Coches' }) // Cambio de resumen a 'Selecciona todos los Coches'
  todos() {
    return this.cochesService.todos(); // Cambio de servicio a CochesService
  }

  @Get(':id')
  uno(@Param('id') id: string) {
    return this.cochesService.uno(id); // Cambio de servicio a CochesService
  }

  @Put(':id')
  actualizar(@Param('id') id: string, @Body() cochesDTO: CochesDTO) { // Cambio de DTO a CochesDTO
    return this.cochesService.actualizar(id, cochesDTO); // Cambio de servicio a CochesService
  }

  @Delete(':id')
  eliminar(@Param('id') id: string) {
    return this.cochesService.eliminar(id); // Cambio de servicio a CochesService
  }
}
