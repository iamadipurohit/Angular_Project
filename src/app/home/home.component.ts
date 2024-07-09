
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Output() isLogout = new EventEmitter<void>();

  constructor(private firebaseService: FirebaseService, private router: Router) {}

  onLogout() {
    this.firebaseService.logout();
    this.isLogout.emit();
    this.router.navigate(['/signin']);
  }
}
