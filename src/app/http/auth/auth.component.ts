import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as firebase from 'firebase';
import { AuthService } from './auth.service';
import { ServersService } from '../servers/servers.service';

@Component( {
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: [ './auth.component.scss' ]
} )
export class AuthComponent implements OnInit {
  @ViewChild('signinForm') signinForm: NgForm;
  @ViewChild('signupForm') signupForm: NgForm;

  constructor( private authService: AuthService, private serversService: ServersService ) {
  }

  ngOnInit() {
    firebase.initializeApp( {
      apiKey: 'AIzaSyAhiGN_n-eoGu9yyQDdt6MiMEi_FqHZ4z0',
      authDomain: 'sumbul-ng-http.firebaseapp.com',
    } );
  }

  onSignup( form: NgForm ) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signupUser( email, password )
        .then( response => {
          console.log( response );
          this.signupForm.reset();
        })
        .catch( error => console.log( error ) );
  }

  onSignin( form: NgForm ) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signinUser( email, password )
        .then(response => {
            console.log( response );
            this.authService.getToken().then(() => this.signinForm.reset());
          }
        )
        .catch((error: Error) => console.log( error ) );
  }

  onLogout() {
    this.authService.logout().then(() => {
      this.authService.token = null;
      this.signinForm.setValue({
        'email': 'test@test.com',
        'password': 'testdata',
      });
      this.serversService.clearServers();
    } );
  }

  isAuthenticated() {
    return this.authService.isAuthenticated()
  }

  getToken() {
    return this.authService.token;
  }
}
