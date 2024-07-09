// firebase.service.ts
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLoggedIn = false;

  constructor(public firebaseAuth: AngularFireAuth) { }

  async signin(email: string, password: string) {
    try {
      const res = await this.firebaseAuth.signInWithEmailAndPassword(email, password);
      this.isLoggedIn = true;
      localStorage.setItem('user', JSON.stringify(res.user));
      return true; // Successfully signed in
    } catch (error) {
      console.error("Error signing in:", error);
      return false; // Failed to sign in
    }
  }

  async signup(email: string, password: string) {
    try {
      const res = await this.firebaseAuth.createUserWithEmailAndPassword(email, password);
      this.isLoggedIn = true;
      localStorage.setItem('user', JSON.stringify(res.user));
      return true; // Successfully signed up
    } catch (error) {
      console.error("Error signing up:", error);
      return false; // Failed to sign up
    }
  }

  async logout() {
    try {
      await this.firebaseAuth.signOut();
      this.isLoggedIn = false;
      localStorage.removeItem('user');
      return true; // Successfully logged out
    } catch (error) {
      console.error("Error logging out:", error);
      return false; // Failed to log out
    }
  }
}
