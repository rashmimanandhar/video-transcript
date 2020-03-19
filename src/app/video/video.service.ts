import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  timeStampUpdated = new EventEmitter<number>();
  constructor() { }
}
