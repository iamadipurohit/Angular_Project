// signin.component.ts
import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  email: string = '';
  password: string = '';
  signinError: string = '';

  constructor(
    public firebaseService: FirebaseService,
    private router: Router
  ) {}

  async onSignin(email: string, password: string) {
    const success = await this.firebaseService.signin(email, password);
    if (success) {
      this.router.navigate(['/home']);
      this.signinError = ''; // Clear any previous errors
    } else {
      this.signinError = 'Invalid email or password';
    }
  }
}
