import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password_hash: string;

  @Prop({ required: false })
  apiKey: string;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
