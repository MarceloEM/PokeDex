import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonDataService {
  @Output() triggerMons: EventEmitter<any> = new EventEmitter();
  constructor() { }
}
