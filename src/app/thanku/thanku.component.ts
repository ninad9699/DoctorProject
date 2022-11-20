import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thanku',
  templateUrl: './thanku.component.html',
  styleUrls: ['./thanku.component.css']
})
export class ThankuComponent {
  constructor( private route:Router){}
 ngOnInit(): void {

 }
 goToLogin(){
  this.route.navigateByUrl('login')
 }
 goTohome(){
  this.route.navigateByUrl('doctor')
 }
}
