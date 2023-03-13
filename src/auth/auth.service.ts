import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import CONFIG from 'src/utils/config';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  async createUser(
    email: string,
    password: string,
  ) {

    email = email.trim().toLowerCase();
    const u = await this.userModel.findOne({ email: email });
    if (u) return 1;

    const hash = await bcrypt.hash(password, Number(CONFIG.BCRYPT_ROUNDS));
    // TODO: any validation on frontend?
    const user = new this.userModel({
      email: email,
      password_hash: hash,
    });
    return user.save();
  }

  async validateEmailUser(email: string, password: string): Promise<any> {
    const user = await this.userModel.findOne({ email: email });
    if (user && (await bcrypt.compare(password, user.password_hash))) {
      const payload = {
        id: user.id,
        email: user.email,
      };
      return payload;
    }
    return null;
  }

  async loginUser(user) {
    const payload = {
      id: user.id,
      email: user.email,
    };
    return { access_token: this.jwtService.sign(payload) };
  }

}
