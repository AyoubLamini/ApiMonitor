import { AuthService } from './auth.service';
import type { Request } from 'express';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(req: Request, body: any): Express.User | undefined;
    getProfile(req: Request): Express.User | undefined;
}
