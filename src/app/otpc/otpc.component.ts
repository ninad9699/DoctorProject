import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otpc',
  templateUrl: './otpc.component.html',
  styleUrls: ['./otpc.component.css']
})
export class OtpcComponent {
  constructor( private route:Router){}
 ngOnInit(): void {

 }
 onOtp(frm2:any){
  console.log(frm2.value);
  if((frm2.value.otp)==123456){
    this.route.navigateByUrl('thanku')
  }
}
}


