import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { TokenService } from './services/token.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private tokenService: TokenService) {}

  // La méthode canActivate() est appelée lorsqu'un utilisateur tente d'accéder à une route protégée
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Récupérer le jeton stocké dans le navigateur
    const token = localStorage.getItem('token');

    // Vérifier si le jeton est valide en utilisant le tokenService
    if (token && this.tokenService.validateToken(token)) {
      // Le jeton est valide, l'utilisateur peut accéder à la route
      return true;
    } else {
      // Le jeton n'est pas valide, rediriger l'utilisateur vers la page de login
      this.router.navigate(['/login']);
      return false;
    }
  }
}
