import { Injectable } from '@angular/core';
import guitars from '../../assets/data.json';
//import {Title} from 

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  guitarCount:any;
  dataup:any;
  gc:any;

  constructor() {
    this.guitarCount=0;
    this.dataup= this.getdata() ;
    this.gc;

   }

   private getdata() : any
   {
     let value:any[]=[];
     for (let guitar of guitars)
     {
       if (guitar.soldOut=='false')
       {
         value.push(guitar);
         this.guitarCount +=1;
       }
      }

      

    }
  }
 