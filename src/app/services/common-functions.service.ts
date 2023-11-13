import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonFunctionsService {

  constructor() { }
  send_data = new Subject<any>();

}




