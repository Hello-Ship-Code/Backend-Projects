import { type InferSchemaType, Schema, type Types, model } from 'mongoose'

// Define the schema separately
const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  gender: { type: String, required: true },
  jobTitle: { type: String, required: true }
}, { timestamps: true })

// Infer the schema type properly
export type IUser = InferSchemaType<typeof userSchema> & { _id: Types.ObjectId }

// Create and export the model
export const user = model<IUser>('User', userSchema)
