import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrl: './login-register.component.css',
})
export class LoginRegisterComponent {
  customOptions: OwlOptions = {
    loop: true,
    nav: true,
    dots: true,
    margin: 10,
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 2000,
    navText: [
      '<i class="ri-arrow-left-line"></i>',
      '<i class="ri-arrow-right-line"></i>',
    ],
  };
}
