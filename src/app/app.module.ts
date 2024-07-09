import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire/compat'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirebaseService } from './services/firebase.service';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
        apiKey: "AIzaSyBvqfPuK9-FZyBPKIk7FdzxvyHDUPFaiVk",
        authDomain: "my-project-8328e.firebaseapp.com",
        projectId: "my-project-8328e",
        storageBucket: "my-project-8328e.appspot.com",
        messagingSenderId: "246705833203",
        appId: "1:246705833203:web:0058ca1d4c8e6f93692386"
      }
    ),
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    FirebaseService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
