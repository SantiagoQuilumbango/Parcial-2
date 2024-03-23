import mongoose from 'mongoose';

export const ModelosSchema = new mongoose.Schema({ // Cambio de nombre de esquema a ModelosSchema
  nombre: { type: String, required: true }, // Cambio de atributo a nombre
  marca: { type: String, required: true }, // Cambio de atributo a marca
});

ModelosSchema.index({ nombre: 1 }, { unique: true }); // Cambio de nombre de índice a nombre
