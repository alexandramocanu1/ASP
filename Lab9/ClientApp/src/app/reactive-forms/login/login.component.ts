import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../core/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [ReactiveFormsModule],
  standalone: true
})
export class LoginComponent{
  loginForm = this.formBuilder.group({
    userName: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private readonly formBuilder: FormBuilder, private readonly router: Router, private readonly authenticationService: AuthenticationService) {

  }

  login() {
    this.authenticationService.login(this.loginForm.value).subscribe((data: any) => {
      this.authenticationService.addTokenToLocalStorage(data.token);
      this.router.navigate(['fetch-data']);
    });
  }

}
