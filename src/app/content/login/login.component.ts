import { Component, OnInit } from '@angular/core';

import {
	FormBuilder,
	FormGroup
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForms();
  }

  private initForms(): void {
		this.loginForm = this.fb.group({
			"firstname": "",
			"lastname": "",
			"email": "",
			"password": ""
		});
  }
  
  public send() {
    this.loginForm.reset();
    console.log(this.loginForm.value);
  }

}
