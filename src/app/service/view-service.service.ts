import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewServiceService {

  public scrolledView$: BehaviorSubject<ScrolledView> = new BehaviorSubject(undefined);
  constructor() { }
}

export enum ScrolledView {
  SOFTWARE_DEV
}
