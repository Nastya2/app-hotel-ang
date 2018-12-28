import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartNavComponent } from './cart-nav/cart-nav.component';
import { ImgParsePipe } from './common/pipes/img-parse/img-parse.pipe';
import { CartDegreeComponent } from './cart-degree/cart-degree.component';
import { CartSocialComponent } from './cart-social/cart-social.component';
import { CartHotelComponent } from './cart-nav/cart-hotel/cart-hotel.component';
import { PhoneParsePipe } from './common/pipes/phone-parse/phone-parse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CartNavComponent,
    ImgParsePipe,
    CartDegreeComponent,
    CartSocialComponent,
    CartHotelComponent,
    PhoneParsePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
