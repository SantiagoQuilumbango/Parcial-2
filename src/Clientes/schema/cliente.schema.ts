import mongoose from 'mongoose';

export const ClientesSchema = new mongoose.Schema(
  {
    Nombre: { type: String, required: true }, // Cambio de atributo a Nombre
  },
  {
    timestamps: true,
  },
);

ClientesSchema.index({ Nombre: 1 }, { unique: true }); // Cambio de índice a Nombre
