import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";
import { Injectable, UnauthorizedException } from "@nestjs/common";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService : AuthService) {
    super({ usernameField: 'email' });
  }
    

  async validate(email: string, password: string) {
    console.log('LocalStrategy validate called with:', { email, password });
    const user = this.authService.validateUser({email, password});
    console.log('validateUser result:', user);
    if (!user) {
        throw new UnauthorizedException();
    }
    return user;        
  }
}