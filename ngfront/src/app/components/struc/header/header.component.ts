import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from 'app/auth.guard'; // Import du service AuthGuard
import { TokenService } from 'app/services/token.service'; // Import du service TokenService
import { UserService } from 'app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  isConnected: boolean = false; // Variable qui indique si l'utilisateur est connecté ou non
  token: string = ''; // Variable pour stocker le jeton d'authentification
  isLoggedIn = false;

  constructor(
    private router: Router, // Injection du service Router
    private authGuard: AuthGuard, // Injection du service AuthGuard
    private tokenService: TokenService, // Injection du service TokenService
    private userService: UserService
  ) {
    // Récupération du jeton d'authentification stocké dans le navigateur
    this.token = localStorage.getItem('token') || '';

    // Appel de la méthode validateToken() du service TokenService en utilisant le jeton récupéré
    this.tokenService.validateToken(this.token).subscribe((isConnected: boolean) => {
      this.isConnected = isConnected; // Mise à jour de la variable isConnected
    });
  }

  ngOnInit() {
    this.userService.getLoginStatus().subscribe(status => {
      this.isConnected = status;
    });
  }

  logout() {
    this.userService.logoutUser().subscribe(
      response => {
        console.log('Deconnecté')
      },
      error => {
        console.error( 'error', error );
      }
    )
  }
}
