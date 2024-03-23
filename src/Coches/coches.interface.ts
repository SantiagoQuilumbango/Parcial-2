import { Document } from 'mongoose';
import { ICoche } from 'src/coches/coches.interface'; // Cambio de interfaz a ICoche

export interface IVuelos extends Document {
  piloto: string;
  avion: string;
  fecha: Date;
  destino: string;
  coche: ICoche; // Cambio de atributo a coche y tipo a ICoche
}
