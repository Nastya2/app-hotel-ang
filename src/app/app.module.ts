import { FilterHotelPipe } from './content/page/cart-nav/pipes/filter-hotel/filter-hotel.pipe';
import { PhoneParsePipe } from './common/pipes/phone-parse/phone-parse.pipe';
import { CartHotelComponent } from './content/page/cart-nav/cart-hotel/cart-hotel.component';
import { CartSocialComponent } from './content/page/cart-social/cart-social.component';
import { CartDegreeComponent } from './content/page/cart-degree/cart-degree.component';
import { CartNavComponent } from './content/page/cart-nav/cart-nav.component';

import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ImgParsePipe } from './common/pipes/img-parse/img-parse.pipe';


import { LoginModule } from './content/login/login.module';
import { TooltipDirective } from './common/directives/tooltip.directive';
import { PageComponent } from './content/page/page.component';

@NgModule({
  declarations: [
    AppComponent,
    CartNavComponent,
    ImgParsePipe,
    CartDegreeComponent,
    CartSocialComponent,
    CartHotelComponent,
    PhoneParsePipe,
    FilterHotelPipe,
    TooltipDirective,
    PageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LoginModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {}
