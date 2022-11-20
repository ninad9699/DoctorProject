import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DocserviceService } from '../docservice.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  myForm:any;
  data:any;
  x:any;
  values:any=[];
 constructor(private api:DocserviceService, private route:Router){}
 ngOnInit(): void {

 }
 onSubmit(frm:any){
  console.log(frm.value)
  this.x=frm.value
  this.api.postData(this.x).subscribe((res:any)=>{
    console.log(res);
  }
  )
this.route.navigateByUrl('otp')
 }
 addvalue(){
  this.values.push({value:""});
 }
}
