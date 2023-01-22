import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError, BehaviorSubject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { UserType, UserApiType, baseUrl } from '../models/login.model';
import { Router } from '@angular/router';

const httpOptions= {
	headers : new HttpHeaders({
		'Content-Type': 'application/json'
  })
}

interface LoginResponse {
	status: number;
	token: string;
}

@Injectable({
	providedIn: 'root'
})

export class UserService {

    private loginStatus$ = new BehaviorSubject<boolean>(false);

	constructor( private router: Router, private http: HttpClient ) { }

	loginUser( loginForm: UserType ): Observable<any> {

		let payload: UserApiType = { username: loginForm.username, password: loginForm.password }

		return this.http.post<LoginResponse>( baseUrl + 'login', payload, httpOptions ).pipe(
		  tap( ( response: LoginResponse ) => {
				if( response.status === 200 ){
					localStorage.setItem( 'token', response.token );
					this.router.navigate( ['/home'] );
					this.setLoginStatus(true);
				}
		  }),
		  catchError( error => {
				// handle the error here
				return throwError(
					() => error);
		  })
		);
	}

    setLoginStatus(status: boolean) {
        this.loginStatus$.next(status);
    }

    getLoginStatus() {
        return this.loginStatus$.asObservable();
    }

    logoutUser(): Observable<any> {
		// Remove the token from the local storage
		localStorage.removeItem( 'token' );
		this.setLoginStatus(false);
		this.router.navigate( ['/login'] );
		return of(null);
    }
	

	registerVisitor( loginForm: UserType ): Observable<any> {
		let payload: UserApiType = { username: loginForm.username, password: loginForm.password } 
		return this.http.post( baseUrl + 'visitor/', payload );
  }
	
}
