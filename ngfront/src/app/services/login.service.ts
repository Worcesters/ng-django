import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError, BehaviorSubject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { UserType, UserApiType, baseUrlApi } from '../models/api.model';
import { Router } from '@angular/router';
import { NotificationService } from './notification.service';

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

	constructor(private notificationService: NotificationService, private router: Router, private http: HttpClient ) { }

	loginUser( loginForm: UserType ): Observable<any> {

		let payload: UserApiType = { username: loginForm.username, password: loginForm.password }

		return this.http.post<LoginResponse>( baseUrlApi + 'login', payload, httpOptions ).pipe(
		  tap( ( response: LoginResponse ) => {
				if( response.status === 200 ){
					localStorage.setItem( 'token', response.token );
					this.router.navigate( ['/home'] );
					this.setLoginStatus(true);
					this.notificationService.success('Bienvenue '+payload.username, 'Connexion Réussi')
				}
		  }),
		  catchError( error => {
				// handle the error here
				this.notificationService.error("Une erreur est survenue Veuillez verifier vos identifiants",'Erreur lors de la connexion')
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
		return this.http.post( baseUrlApi + 'visitor/', payload );
  }
	
}

