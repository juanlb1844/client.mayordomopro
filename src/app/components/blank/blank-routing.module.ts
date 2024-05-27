import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnboardComponent } from './onboard/onboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { ForgotComponent } from './forgot/forgot.component';
import { OrderSuccessComponent } from './order-success/order-success.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'onboard',
        component: OnboardComponent,
      },
      {
        path: 'get-started',
        component: GetStartedComponent,
      },
      {
        path: 'login-register',
        component: LoginRegisterComponent,
      },
      {
        path: 'forgot',
        component: ForgotComponent,
      },
      {
        path: 'order-success',
        component: OrderSuccessComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlankRoutingModule {}
