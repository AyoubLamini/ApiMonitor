import { Body, Controller, Get,  Post, Req,  UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalGuard } from './guards/local.guard';
import type { Request } from 'express';
import { JWTauthGuard } from './guards/jwt.guard';

@Controller('auth')
export class AuthController {

    constructor(private authService : AuthService)
    {

    }

    @Post('login')
    @UseGuards(LocalGuard)
    login(@Req() req : Request, @Body() body: any) 
    {
        console.log('Login endpoint hit, body:', body);
        return req.user;
    }

    @Get('profile')
    @UseGuards(JWTauthGuard)
    getProfile(@Req() req : Request) {
        console.log("This is the request ====>", req.user);
        return req.user;    
    }
}
