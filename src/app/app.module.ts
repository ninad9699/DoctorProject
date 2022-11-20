import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { LoginUComponent } from './login-u/login-u.component';
import { DoctorComponent } from './doctor/doctor.component';
import { HttpClientModule } from '@angular/common/http';
import { ThankuComponent } from './thanku/thanku.component';
import { HomedComponent } from './homed/homed.component';
import { OtpcComponent } from './otpc/otpc.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginUComponent,
    DoctorComponent,
    ThankuComponent,
    HomedComponent,
    OtpcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
