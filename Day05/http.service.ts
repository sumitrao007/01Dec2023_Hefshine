import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseurl:string='http://localhost:8080/api/student';

  constructor(private http:HttpClient) {
    
   }

   fetchRecord(){
      return (this.http.get(this.baseurl));
   }

   PostRecord(obj:any){
        return (this.http.post(this.baseurl,obj));
   }

   UpdateData(obj:any){
      return (this.http.put(`${this.baseurl}/${obj.id}`,obj));
   }

   DeleteData(id:any){
        return (this.http.delete(`${this.baseurl}/${id}`));
   }


}
