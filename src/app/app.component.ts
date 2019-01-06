import { environment } from './../environments/environment';
// import { AppService } from './app.service';

import { Component, ViewEncapsulation, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent  implements OnInit {

  public version;

  constructor(@Inject('ServiceInjectString') private service) {}

  ngOnInit() {
    if (environment.production) {
      this.service.getVersion().subscribe((res) => {
        this.version = res;
      });
    }
  }
}
