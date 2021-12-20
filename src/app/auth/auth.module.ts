import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { SignoutComponent } from './signout/signout.component';

@NgModule({
  declarations: [LoginComponent, SignoutComponent],
  imports: [CommonModule, ReactiveFormsModule, SharedModule],
  exports: [LoginComponent, SignoutComponent],
})
export class AuthModule {}
