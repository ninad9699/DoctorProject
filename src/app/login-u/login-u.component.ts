import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DocserviceService } from '../docservice.service';

@Component({
  selector: 'app-login-u',
  templateUrl: './login-u.component.html',
  styleUrls: ['./login-u.component.css']
})
export class LoginUComponent {
  myForm1:any;
  data:any;
  x:any;
 constructor(private api:DocserviceService, private route:Router){}
 ngOnInit(): void {

 }
  onLogin(frm1:any){
    console.log(frm1.value);
    this.data=frm1.value
    this.api.getData().subscribe((res:any)=>{
      console.log(res);
      this.x=res;
      this.x.forEach((Element:any)=>{
        if((this.data.mobP==Element.mob)&&(this.data.pass1==Element.pass)){
          this.route.navigateByUrl('doctor')
        }
      })
        
      
    })
  }
}
