import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';

import { PrincipalComponent } from './principal/principal.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SearchResultsComponent } from './search-results/search-results.component';

@NgModule({
  declarations: [
    PrincipalComponent,
    ProductDetailsComponent,
    CartComponent,
    PaymentComponent,
    PromotionsComponent,
    UserProfileComponent,
    SearchResultsComponent,
  ],
  imports: [CommonModule, MainRoutingModule],
})
export class MainModule {}
