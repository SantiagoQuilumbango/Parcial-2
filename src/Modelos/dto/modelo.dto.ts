import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class ModelosDTO { // Cambio de nombre de clase a ModelosDTO
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo es obligatorio' })
  @IsString()
  readonly nombre: string; // Cambio de nombre de atributo a nombre

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo es obligatorio' })
  @IsString()
  readonly marca: string; // Cambio de nombre de atributo a marca
}
