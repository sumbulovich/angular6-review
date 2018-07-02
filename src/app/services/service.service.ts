import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ServiceService {
  color = 'yellow';

  constructor() { }

  colorUpdated = new EventEmitter<string>();
  colorUpdated2 = new Subject();

  getColor() {
    return this.color;
  }

  setColor(color) {
    this.color = color;
  }

}
