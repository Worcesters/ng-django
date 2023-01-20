import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
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

	constructor( private router: Router, private http: HttpClient ) { }

	loginUser( loginForm: UserType ): Observable<any> {

		let payload: UserApiType = { username: loginForm.username, password: loginForm.password }
		console.log(payload)

		return this.http.post<LoginResponse>( baseUrl + 'login', payload, httpOptions ).pipe(
		  tap( ( response: LoginResponse ) => {
				console.log(response)
				if( response.status === 200 ){
					localStorage.setItem( 'token', response.token );
					this.router.navigate( ['/curriculum'] );
				}
		  }),
		  catchError( error => {
				// handle the error here
				return throwError(() => error);
		  })
		);
	}


	logout() {
    // Remove the token from the local storage
    localStorage.removeItem( 'token' );
    let token = null;
		return token
  }
	

	registerVisitor( loginForm: UserType ): Observable<any> {
		let payload: UserApiType = { username: loginForm.username, password: loginForm.password } 
		return this.http.post( baseUrl + 'visitor/', payload );
  }
	

}