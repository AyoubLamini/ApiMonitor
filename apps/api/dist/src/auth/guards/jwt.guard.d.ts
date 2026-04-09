import { ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";
declare const JWTauthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class JWTauthGuard extends JWTauthGuard_base {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
export {};
