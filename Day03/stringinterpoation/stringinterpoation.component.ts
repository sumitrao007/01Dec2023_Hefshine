import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stringinterpoation',
  templateUrl: './stringinterpoation.component.html',
  styleUrls: ['./stringinterpoation.component.css']
})
export class StringinterpoationComponent implements OnInit {

  name:string='Sumit Raokhande'
  imgUrl:string='../../assets/bg4.jpg';

  num:number=4;

  constructor() { }

  ngOnInit(): void {
  }

}
