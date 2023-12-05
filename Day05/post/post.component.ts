import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  studData:any[]=[];
  myid!:any;
  myname:string='';
  myphoneNo:string='';
  mycreateddate:string='';
  isHidden:boolean=true;

  constructor(private service:HttpService) { }

  ngOnInit(): void {
      this.getRecord();     
  }

  getRecord(){
    this.service.fetchRecord()
    .subscribe((response:any)=>{
      console.log(response);
      this.studData=response;
    },(myerror)=>{
        alert("Error Occured...")
    })
  }

  onSend(myname:any,myphoneno:any){

    let obj={
      name:myname,
      phoneno:myphoneno,
      createddate:new Date()
    }

    this.service.PostRecord(obj)
    .subscribe((response)=>{
      console.log(response);
      this.getRecord();
    })

  }

  onEdit(item:any){
    
    this.myid=item.id;
    this.myname=item.name;
    this.myphoneNo=item.phoneno;
    this.mycreateddate=item.createddate;
    this.isHidden=false;

  }

  onUpdate(){

    let obj={
      id:this.myid,
      name:this.myname,
      phoneno:this.myphoneNo,
      createddate:this.mycreateddate
    }

    this.service.UpdateData(obj)
    .subscribe((response)=>{
      console.log(response);
      this.getRecord();
      alert("Update Successfully");
      this.isHidden=true;
    });

  }

  onDelete(id:any){

    this.service.DeleteData(id)
    .subscribe((response)=>{
      console.log(response)
      this.getRecord();
    })
  }

}
