import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartNavComponent } from './cart-nav/cart-nav.component';
import { ImgParsePipe } from './common/pipes/img-parse/img-parse.pipe';
import { CartSocialComponent } from './cart-social/cart-social.component';
import { CartHotelComponent } from './cart-nav/cart-hotel/cart-hotel.component';
import { PhoneParsePipe } from './common/pipes/phone-parse/phone-parse.pipe';
import { NewModule } from './new-module/new-module.module';
import { ViewportService } from './services/viewport-service.service';

@NgModule({
  declarations: [
    AppComponent,
    CartNavComponent,
    ImgParsePipe,
    CartSocialComponent,
    CartHotelComponent,
    PhoneParsePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NewModule
  ],
  providers: [
    ViewportService,
    {
      provide: 'SizeService',
      useFactory: (view: ViewportService) => {
        return view.determineService();
      },
      deps: [ViewportService]
    }],
  bootstrap: [AppComponent]
})
export class AppModule {}
