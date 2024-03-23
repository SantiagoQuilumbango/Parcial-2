import { IsDate, IsNotEmpty, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CochesDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly Matricula: string; // Cambio de atributo a Matricula

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly ID_Modelo: string; // Cambio de atributo a ID_Modelo (FK)

  @ApiProperty()
  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  readonly fecha: Date; // Mantenimiento del atributo fecha

  constructor(piloto: string, avion: string, fecha: Date, destino: string) {
    this.Matricula = piloto; // Cambio de nombre de atributo a Matricula
    this.ID_Modelo = avion; // Cambio de nombre de atributo a ID_Modelo
    this.fecha = fecha; // Mantenimiento del atributo fecha
    this.destino = destino; // Mantenimiento del atributo destino
  }
}
