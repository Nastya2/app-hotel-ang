import { AppService } from './../app.service';
import { CartDegreeComponent } from './../cart-degree/cart-degree.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CartDegreeComponent],
  imports: [
    CommonModule
  ],
  providers: [AppService],
  exports: [CartDegreeComponent]
})
export class NewModule {}
