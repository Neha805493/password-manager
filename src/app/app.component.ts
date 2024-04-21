import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'password-manager';
  constructor(private router: Router) {}
  navigateToPasswords(url:string) {
    this.router.navigateByUrl(url);
  }
}
