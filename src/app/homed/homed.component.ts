import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homed',
  templateUrl: './homed.component.html',
  styleUrls: ['./homed.component.css']
})
export class HomedComponent {
  constructor( private route:Router){}
 ngOnInit(): void {

 }
  onRegister(){
    this.route.navigateByUrl('signup')
  }
  onlog(){
    this.route.navigateByUrl('login')
  }
  ondoc(){
    this.route.navigateByUrl('doctor')
  }
}
