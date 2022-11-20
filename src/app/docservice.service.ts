import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DocserviceService {

  constructor(private http:HttpClient) { }
  postData(x:any){
    return this.http.post<any>("http://localhost:3000/doctors/",x);

  }
  getData(){
    return this.http.get<any>("http://localhost:3000/doctors")
  }
}
