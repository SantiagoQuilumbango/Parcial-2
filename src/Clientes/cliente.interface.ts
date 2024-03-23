import { Document } from 'mongoose';

export interface IClientes extends Document {
  ID_Cliente: string; // Cambio de atributo a ID_Cliente
  Nombre: string; // Mantenimiento del atributo Nombre
}
