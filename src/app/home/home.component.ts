

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  @Output() isLogout=new EventEmitter<void>()
  constructor(public firebaseService:FirebaseService){}
  
  onLogout(){
    console.log("hello from Aditya");
    this.firebaseService.logout()
    this.isLogout.emit()
  }
}
