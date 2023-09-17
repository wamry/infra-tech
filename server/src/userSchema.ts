import { Schema, model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
}

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

// 3. Create a Model.
export const User = model<IUser>('User', userSchema);

// Duplicate the ID field.
userSchema.virtual('id').get(function(){
  return this._id.toHexString();
});
userSchema.virtual('createdAt').get(function(){
  return this._id.getTimestamp();
});

userSchema.set('toJSON', {
  virtuals: true
});
