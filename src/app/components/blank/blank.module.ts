import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankRoutingModule } from './blank-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { OnboardComponent } from './onboard/onboard.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { ForgotComponent } from './forgot/forgot.component';
import { OrderSuccessComponent } from './order-success/order-success.component';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    OnboardComponent,
    GetStartedComponent,
    LoginRegisterComponent,
    ForgotComponent,
    OrderSuccessComponent,
  ],
  imports: [CommonModule, BlankRoutingModule, CarouselModule],
})
export class BlankModule {}
