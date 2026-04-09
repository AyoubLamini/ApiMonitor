import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import {ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JWTStrategy  extends  PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration : false,
            secretOrKey : "ayoublamini123"
});
 }

     validate(payload : any) {
        console.log("This is the payload ====>", payload);
        return payload;
     }
}