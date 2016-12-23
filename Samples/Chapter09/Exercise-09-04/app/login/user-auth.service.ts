import {Injectable} from '@angular/core';

@Injectable() 
export class UserAuthService{
  loggedInUser: string = null;
  redirectUrl: string;

  login(userName: string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.loggedInUser = userName;
        resolve();
      }, 1000);
    });
  }

  logout() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.loggedInUser = null;
        this.redirectUrl = null;
        resolve();
      }, 200);
    });
  }
}