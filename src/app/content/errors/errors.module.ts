import { CommonModule } from '@angular/common';
import { ErrorsService } from './errors.service';
import { ErrorsComponent } from './errors.component';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
   ErrorsComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [ErrorsService],
  exports: [ErrorsComponent],
})


export class ErrorsModule {

  constructor() {
  }
}
