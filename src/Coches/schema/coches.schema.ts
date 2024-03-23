import mongoose from 'mongoose';

export const CochesSchema = new mongoose.Schema(
  {
    Matricula: { type: String, required: true }, // Cambio de atributo a Matricula
    ID_Modelo: { type: mongoose.Schema.Types.ObjectId, ref: 'Modelo' }, // Cambio de atributo a ID_Modelo (FK)
    fecha: { type: Date, required: true }, // Mantenimiento del atributo fecha
    destino: { type: String, required: true }, // Mantenimiento del atributo destino
    passengers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'passengers' }], // Mantenimiento del atributo passengers
  },
  {
    timestamps: true,
  },
);
