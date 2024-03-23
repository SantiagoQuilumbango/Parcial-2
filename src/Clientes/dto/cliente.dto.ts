import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class ClientesDTO {
  @ApiProperty()
  @IsNotEmpty({ message: 'El nombre es requerido' })
  @IsString()
  readonly Nombre: string; // Cambio de atributo a Nombre
}
