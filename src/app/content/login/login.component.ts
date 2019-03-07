import { Component } from '@angular/core';

import {
  FormBuilder,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public loginForm;

  constructor(private fb: FormBuilder) {this.initForms();}

  private initForms(): void {
		this.loginForm = this.fb.group({
			"firstname": ["",[Validators.required,Validators.minLength(5)]],
			"lastname": "",
			"email": "",
      "password": "",
      "check": ""
		});
  }

  public send() {
    this.loginForm.reset();
  }

}
