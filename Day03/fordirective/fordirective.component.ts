import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {


  course:string[]=["Core Java",'Advaced java','Spring Boot','Angular 12 ','Docker','Jenking'];

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
