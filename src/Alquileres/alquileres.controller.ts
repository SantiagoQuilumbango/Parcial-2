import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { AlquileresService } from './alquileres.service'; // Cambio de servicio a AlquileresService
import { AlquileresDTO } from './dto/alquileres.dto'; // Cambio de DTO a AlquileresDTO
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('alquileres') // Cambio de etiqueta a 'alquileres'
@Controller('api/v1/alquileres') // Cambio de ruta base a 'api/v1/alquileres'
export class AlquileresController { // Cambio de nombre de clase a AlquileresController
  constructor(
    private readonly alquileresService: AlquileresService, // Cambio de servicio a AlquileresService
  ) {}

  @Post()
  @ApiOperation({ summary: 'Crear Alquiler' }) // Cambio de resumen a 'Crear Alquiler'
  insertar(@Body() alquileresDTO: AlquileresDTO) { // Cambio de DTO a AlquileresDTO
    return this.alquileresService.insertar(alquileresDTO); // Cambio de servicio a AlquileresService
  }

  @Get()
  @ApiOperation({ summary: 'Seleccionar todos los Alquileres' }) // Cambio de resumen a 'Seleccionar todos los Alquileres'
  todos() {
    return this.alquileresService.todos(); // Cambio de servicio a AlquileresService
  }

  @Get(':id')
  uno(@Param('id') id: string) {
    return this.alquileresService.uno(id); // Cambio de servicio a AlquileresService
  }

  @Put(':id')
  actualizar(@Param('id') id: string, @Body() alquileresDTO: AlquileresDTO) { // Cambio de DTO a AlquileresDTO
    return this.alquileresService.actualizar(id, alquileresDTO); // Cambio de servicio a AlquileresService
  }

  @Delete(':id')
  eliminar(@Param('id') id: string) {
    return this.alquileresService.eliminar(id); // Cambio de servicio a AlquileresService
  }
}
