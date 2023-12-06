import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demobootstrap',
  templateUrl: './demobootstrap.component.html',
  styleUrls: ['./demobootstrap.component.css']
})
export class DemobootstrapComponent implements OnInit {

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

}
