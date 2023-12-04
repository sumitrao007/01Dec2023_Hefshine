import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {

  strdata:string='U r learn Angular 12 fro Sumit';

  jsonObj={
    id:9,
    fname:'Sumit',
    lname:'Raokhande'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
