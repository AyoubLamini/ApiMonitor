import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getRequest(req: Request): number;
    getRequestedId(id: number): number;
}
