import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { ClientesService } from './clientes.service'; // Cambio de servicio a ClientesService
import { ClientesDTO } from './dto/clientes.dto'; // Cambio de DTO a ClientesDTO
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Clientes') // Cambio de etiqueta a 'Clientes'
@Controller('api/v2/clientes') // Cambio de ruta base a 'api/v2/clientes'
export class ClientesController { // Cambio de nombre de clase a ClientesController
  constructor(private clienteService: ClientesService) {} // Cambio de servicio a ClientesService

  @Post()
  insertar(@Body() clienteDTO: ClientesDTO) { // Cambio de DTO a ClientesDTO
    return this.clienteService.insertar(clienteDTO); // Cambio de servicio a ClientesService
  }

  @Get()
  todos() {
    return this.clienteService.todos(); // Cambio de servicio a ClientesService
  }

  @Get(':id')
  uno(@Param('id') id: string) {
    return this.clienteService.uno(id); // Cambio de servicio a ClientesService
  }

  @Put(':id')
  actualizar(@Param('id') id: string, @Body() clienteDTO: ClientesDTO) { // Cambio de DTO a ClientesDTO
    return this.clienteService.actualizar(id, clienteDTO); // Cambio de servicio a ClientesService
  }

  @Delete(':id')
  eliminar(@Param('id') id: string) {
    return this.clienteService.eliminar(id); // Cambio de servicio a ClientesService
  }
}
