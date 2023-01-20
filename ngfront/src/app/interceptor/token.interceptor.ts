import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) {}

  // Fonction pour vérifier la validité du jeton
  static isTokenValid(): boolean {
    let token = localStorage.getItem('token');
    if (!token) {
      return false;
    }
    return true;
  }

  // Intercepteur pour ajouter le jeton d'authentification à toutes les requêtes
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (TokenInterceptor.isTokenValid()) {
      let token = localStorage.getItem('token');
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(req);
  }
}
