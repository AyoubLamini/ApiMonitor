import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getSomePizdyetNakhuy() : string 
  {
    return "Hello some pizdyets Nakhuy"
  }
  getRrquestedId(number : number) : number
  {
    return number + 1;
  }
}
