import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  loggedIn = false;
  logUpdate = new EventEmitter<boolean>();

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
          this.logUpdate.emit(this.loggedIn);
        }, 800);
      },
    );
    return promise;
  }

  login() {
    this.loggedIn = true;
    this.logUpdate.emit(this.loggedIn);
    alert('Loged In');
  }

  logout() {
    const confirmation = confirm('Do you want to discard the changes?');
    if (confirmation) {
      this.loggedIn = false;
      this.logUpdate.emit(this.loggedIn);
    }
  }
}
