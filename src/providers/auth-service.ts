import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

/**
 * Provider der die Validität der eingegebenen Nutzerdaten prüft. Wäre ein Realität eine Anbindung zu einem Uniserver mit USpace Nutzerdaten.
 */
export class User {
    username:string;
    matnr:string;
    
    constructor(username:string,matnr:string) {
        this.username=username;
        this.matnr=matnr;
    }
}

/*
 * AuthService checkt validität der eingaben von login.
 */
@Injectable()
export class AuthService {
    currentUser: User;

  public login(credentials) {
        if (credentials.username === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        // This would be a check with USpace if credentials are correct. Sampleuser: [NAME:guest,PW:guest]
        let access = (credentials.password === "guest" && credentials.username === "guest");
        this.currentUser = new User('Guest', '0000000');
        observer.next(access);
        observer.complete();
      });
    }
  }
  public getUserInfo() : User {
    return this.currentUser;
  }
 
  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}
