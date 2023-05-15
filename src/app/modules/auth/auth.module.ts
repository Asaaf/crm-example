import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { MainComponent } from './components/main/main.component';
import { RegistryComponent } from './components/registry/registry.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainComponent,
    RegistryComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ]
})
export class AuthModule { }
