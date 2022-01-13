import { Injectable } from '@angular/core';
import data from '../../assets/data.json';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  guitars:any;

  constructor() {
    this.guitars = this.getdata() ;
   }

   private getdata() : any{let value:any[]=[];}
  }
 