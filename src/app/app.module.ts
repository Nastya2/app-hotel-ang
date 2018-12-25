import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartNavComponent } from './cart-nav/cart-nav.component';
import { ImgParsePipe } from './img-parse.pipe';
import { CartDegreeComponent } from './cart-degree/cart-degree.component';
import { CartSocialComponent } from './cart-social/cart-social.component';

@NgModule({
  declarations: [
    AppComponent,
    CartNavComponent,
    ImgParsePipe,
    CartDegreeComponent,
    CartSocialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
