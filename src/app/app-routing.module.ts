import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './doctor/doctor.component';
import { HomedComponent } from './homed/homed.component';
import { LoginUComponent } from './login-u/login-u.component';
import { OtpcComponent } from './otpc/otpc.component';
import { RegistrationComponent } from './registration/registration.component';
import { ThankuComponent } from './thanku/thanku.component';

const routes: Routes = [
  
  {path:'',component:HomedComponent},
  {path:'signup',component:RegistrationComponent},
  {path:'thanku',component:ThankuComponent},
  {path:'otp',component:OtpcComponent},
  {path:'login',component:LoginUComponent},
  {path:'doctor',component:DoctorComponent},
  {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
