
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { MatCheckboxModule } from '@angular/material';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  providers: [LoginService],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatCheckboxModule
  ]
})


export class LoginModule {}
