import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map,of } from 'rxjs';
import { baseUrl } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor( private http: HttpClient ) { }

  // Méthode pour vérifier la validité du jeton
  validateToken( token: string ): Observable<boolean> {
    return token === "" ? of(false) : this.http.get<{valid: boolean}>(baseUrl + `isAuthenticated?token=${token}`)
    .pipe(
        map(response => response.valid)
    );
  }
}
