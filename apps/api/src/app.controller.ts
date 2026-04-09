import { Controller, Get, Param, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('req')
  getRequest(@Req() req : Request )
  {
    console.log(req)
    return 1;
  }
  @Get(':id')
  getRequestedId(@Param('id') id : number ):number {
    return this.appService.getRrquestedId(+id); // +id converts string to number
  } 
}
