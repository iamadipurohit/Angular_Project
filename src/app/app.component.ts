import { Component } from '@angular/core';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Project';
  isSignedIn=false
  constructor(public firebaseService:FirebaseService){}

  ngOnInit() {
    if(localStorage.getItem('user')!==null)
    {
      this.isSignedIn=true;
    }
    else{
      this.isSignedIn=false;
    }
   
  }
  async onSignup(email:string, password:string)
  {
   await this.firebaseService.signup(email,password)
   if(this.firebaseService.isLoggedIn)
    {
      this.isSignedIn=true;
    }
  }
  async onSignin(email:string, password:string)
  {
   await this.firebaseService.signin(email,password)
   if(this.firebaseService.isLoggedIn)
    {
      this.isSignedIn=true;
    }
  }
  async handleLogout(){
    await this.firebaseService.logout().then(() => {
      if(this.firebaseService.isLoggedIn)
        {
          this.isSignedIn=true;
        }
        else{
         this.isSignedIn=false;
        }
    }).catch(error => {
      console.error("Error logging out:", error);
    });
    

  }
}
