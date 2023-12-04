import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  @Output() childStrdata=new EventEmitter();

  @Output() childArrObjEvent=new EventEmitter();

  strdata:string='data from Child';

  arrObj=[
    {
      name:'samsung',
      price:25000,
      qty:1
    },
    {
      name:'One Plus',
      price:45000,
      qty:1
    },
    {
      name:'Realme',
      price:18000,
      qty:1
    },
    {
      name:'Motorola',
      price:30000,
      qty:1
    },
    {
      name:'apple',
      price:65000,
      qty:1
    }
];
  constructor() { }

  ngOnInit(): void {
  }

  onSend(){
    this.childStrdata.emit(this.strdata);
    this.childArrObjEvent.emit(this.arrObj);
  }

}
