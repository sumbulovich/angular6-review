import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.scss']
})
export class RoutingComponent {
  loggedIn = false;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.logUpdate.subscribe(
      (loggedIn: boolean) => {
        this.loggedIn = loggedIn;
      }
    );
  }

  linkToDirectives() {
    this.router.navigate(['/directives']);
  }

  onLogIn() {
    this.authService.login();
  }

  onLogOut() {
    this.authService.logout();
  }

}
