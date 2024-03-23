import { IsDate, IsNotEmpty, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class AlquileresDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly ID_Alquiler: string;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly ID_Coche: string;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly ID_Cliente: string;
  
  @ApiProperty()
  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  readonly Fecha_Inicio: Date;
  
  @ApiProperty()
  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  readonly Fecha_Fin: Date;
}

