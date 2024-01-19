import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { AuthenticationService } from '../../core/services/authentication.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm = this.formBuilder.group({
    userName: ['', Validators.required],
    email: ['', Validators.email],
    password: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
  });

  constructor(private readonly formBuilder: FormBuilder,
              private readonly router: Router,
              private readonly authenticationService: AuthenticationService) {
  }

  register() {
      this.authenticationService.register(this.registerForm.value)
        .subscribe((data: any) => {
          console.log(data);
          this.router.navigate(['login']);
        });
  }

}
