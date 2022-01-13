/*import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-guitar-list',
  templateUrl: './guitar-list.component.html',
  styleUrls: ['./guitar-list.component.css']
})
export class GuitarListComponent implements OnInit {

  @Input() Guitar: String | undefined;
  @Input() SearchText: any;
  constructor() { }

  ngOnInit(): void {
  }

}
*/
import { Component, OnInit,Input} from '@angular/core';
import guitars from '../../../assets/data.json';
import { Router } from '@angular/router';
import { DataTransferService } from 'src/app/services/data-transfer.service';



@Component({
  selector: 'app-guitarlist',
  templateUrl: './guitar-list.component.html',
  styleUrls: ['./guitar-list.component.css']
})
export class GuitarlistComponent implements OnInit {
  
  @Input() Guitar: String | undefined;
  @Input() searchText: any;
  
  guitars = this.dataTransfer.dataup;
  names:any;
  guitarName:any;
  gn:any;
  orderby:any;
  sortname:any;
   
  getName(){
    this.gn = name;
    console.log('this is getName fumnction: ',this.gn);
  }

 onClick(name: string) {
  this.guitarName = '';
  this.guitarName =name;
  console.log('pg',this.guitarName);
  return this.guitarName;
 }
  
  constructor(public dataTransfer:DataTransferService) {

    /*this.Name = this.names;*/
    console.log('this is constriuctor:',this.guitarName);
    this.dataTransfer.dataup = this.guitars;
   }
 
  ngOnInit(): void {
    
  }  

  
  public toggleGuitarDetails(name:String){
    console.log(name)
  }

  orderBy(event:any){
    this.orderby = event.target.value;
    this.sort();
  }
  updateSortHeader(event: any) {
    this.sortname = event.target.value;
    this.sort();
  }
  
  sort(){
    let order:number;
    if(this.orderby == 'ascending'){
    order=1;}
    else {order=-1;}
    if (this.sortname === 'name') {
      this.guitars.sort((a: { name: any; }, b: { name: any; }) => {
        if (a.name < b.name) {
          return -1 * order;
        } else if (a.name > b.name) {
          return order * 1;
        } else {
          return 0;
        }
      });
    } else if (this.sortname === 'date') {
      this.guitars.sort((a: { dateAdded: number; }, b: { dateAdded: number; }) => {
        if (a.dateAdded < b.dateAdded) return -1 * order;
        else if (a.dateAdded > b.dateAdded) return order * 1;
        else return 0;
      });
    } else if (this.sortname === 'price') {
      this.guitars.sort((a: { price: number; }, b: { price: number; }) => {
        if (a.price < b.price) return -1 * order;
        else if (a.price > b.price) return order * 1;
        else return 0;
      });
    }
  }

  }



