import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding2',
  templateUrl: './eventbinding2.component.html',
  styleUrls: ['./eventbinding2.component.css']
})
export class Eventbinding2Component implements OnInit {

  result:number=0;
  res1!:number;
  name:string=''
  constructor() { }

  ngOnInit(): void {
  }

  onAddition(num1:any,num2:any){
    let n1=+num1;
    let n2=+num2;
    // this.result=num1+num2;
    this.result=n1+n2;
  }

  onChange(){
    console.log("Change Event Occur...")
  }


  onKeyUp(){
    console.log("Key Up Event Is occur...")

  }

  onKeyDown(){
    console.log("Key Down Event Is occur...")
  }


}
