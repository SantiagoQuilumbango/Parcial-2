import mongoose from 'mongoose';

export const AlquileresSchema = new mongoose.Schema(
  {
    ID_Alquiler: { type: String, required: true },
    ID_Coche: { type: String, required: true },
    ID_Cliente: { type: String, required: true },
    Fecha_Inicio: { type: Date, required: true },
    Fecha_Fin: { type: Date, required: true },
  },
  {
    timestamps: true,
  },
);
