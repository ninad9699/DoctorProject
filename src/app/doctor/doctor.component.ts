import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DocserviceService } from '../docservice.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {
  data:any;
  constructor(private api:DocserviceService, private route:Router){}
  ngOnInit(): void {
 this.getCardData();
  }
  getCardData(){
    this.api.getData().subscribe((res:any)=>{
      console.log(res);
      this.data=res;

    })
  }
  goHome(){
    this.route.navigateByUrl('landing')
  }
}
