import { Document } from 'mongoose';
import { ICliente } from './cliente.interface'; // Importación del interfaz del cliente

export interface IAlquileres extends Document { // Cambio de nombre de interfaz a IAlquileres
  ID_Alquiler: string; // Cambio de atributo a ID_Alquiler
  ID_Coche: string; // Cambio de atributo a ID_Coche
  ID_Cliente: ICliente; // Cambio de atributo a ID_Cliente y tipo a ICliente
  Fecha_Inicio: Date; // Cambio de atributo a Fecha_Inicio
  Fecha_Fin: Date; // Cambio de atributo a Fecha_Fin
}
