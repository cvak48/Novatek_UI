import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonHttpService {

  constructor() { }

  getData() {
    return console.log('Hello Everone');
  }

}
