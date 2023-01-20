import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/auth.guard'; // Import du service AuthGuard
import { TokenService } from 'src/app/services/token.service'; // Import du service TokenService

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  isConnected: boolean = false; // Variable qui indique si l'utilisateur est connecté ou non
  token: string = ''; // Variable pour stocker le jeton d'authentification

  constructor(
    private router: Router, // Injection du service Router
    private authGuard: AuthGuard, // Injection du service AuthGuard
    private tokenService: TokenService // Injection du service TokenService
  ) {
    // Récupération du jeton d'authentification stocké dans le navigateur
    this.token = localStorage.getItem('token') || '';

    // Appel de la méthode validateToken() du service TokenService en utilisant le jeton récupéré
    this.tokenService.validateToken(this.token).subscribe((isConnected: boolean) => {
      this.isConnected = isConnected; // Mise à jour de la variable isConnected
    });
  }

  logout() {
    // Logout logic goes here
    // remove token from local storage
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
