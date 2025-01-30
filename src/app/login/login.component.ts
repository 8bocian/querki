import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router: Router) {}

  currentTab: 'login' | 'register' = 'login';
  setTab(tab: 'login' | 'register') {
    this.currentTab = tab;
  }

  login() {
    console.log("NAVIG");
    this.router.navigate(['/user-threads']);
  }
}
