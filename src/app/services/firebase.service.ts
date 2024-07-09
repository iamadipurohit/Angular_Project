import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLoggedIn=false;
  constructor(public firebaseAuth:AngularFireAuth) { }
  async signin(email: string, password: string) {
    await this.firebaseAuth.signInWithEmailAndPassword(email, password).then(res => {
      this.isLoggedIn = true;
      localStorage.setItem('user', JSON.stringify(res.user));
    }).catch(error => {
      console.error("Error signing in:", error);
    });
  }
  
   async signup(email: string, password: string) {
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password).then(res => {
      this.isLoggedIn = true;
      localStorage.setItem('user', JSON.stringify(res.user));
    }).catch(error => {
      console.error("Error signing up:", error);
    });
  }
  async logout() {
    await this.firebaseAuth.signOut().then(() => {
      this.isLoggedIn = false;
      localStorage.removeItem('user');
    }).catch(error => {
      console.error("Error logging out:", error);
    });
  }
}
