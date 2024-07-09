// signup.component.ts
import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  email: string = '';
  password: string = '';
  signupError: string = '';

  constructor(
    public firebaseService: FirebaseService,
    private router: Router
  ) {}

  async onSignup(email: string, password: string) {
    const success = await this.firebaseService.signup(email, password);
    if (success) {
      this.router.navigate(['/home']);
      this.signupError = ''; // Clear any previous errors
    } else {
      this.signupError = 'Error signing up. Please try again.';
    }
  }
}
