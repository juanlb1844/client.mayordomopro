import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

/* Components */
import { AppComponent } from './app.component';
import { MainComponent } from './layouts/main/main.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { FooterComponent } from './components/shared/footer/footer.component';

@NgModule({
  declarations: [AppComponent, MainComponent, BlankComponent, FooterComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
