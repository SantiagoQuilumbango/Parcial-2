import { Document } from 'mongoose';

export interface IModelo extends Document { // Cambio de nombre de interfaz a IModelo
  nombre: string; // Cambio de atributo a nombre
  marca: string; // Cambio de atributo a marca
}
