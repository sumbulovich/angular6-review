import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { ServersService } from '../servers/servers.service';

@Injectable()
export class AuthService {
  token: string;

  constructor() {
  }

  getToken() {
    return firebase.auth().currentUser.getIdToken().then(
      ( token: string ) => this.token = token
    );
  }

  isAuthenticated() {
    return this.token != null;
  }

  signupUser( email: string, password: string ) {
    return firebase.auth().createUserWithEmailAndPassword( email, password );
  }

  signinUser( email: string, password: string ) {
    return firebase.auth().signInWithEmailAndPassword( email, password );
  }

  logout() {
    return firebase.auth().signOut();
  }
}
