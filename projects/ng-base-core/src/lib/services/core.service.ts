import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  sayHello(name: string): void {
    console.log(`Hello, ${name}!`);
  }
}
