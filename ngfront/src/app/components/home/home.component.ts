import { Component } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  i: number = 0
  message: string = ""

  constructor(private notificationService: NotificationService){}

  fakeButton(){
    this.i += 1

    if( this.i==1 ){
      this.notificationService.error("Vous n'avez pas appuyer assez fort veuillez réessayer", "Erreur lors de l'utilisation")
    }
    else if( this.i==2 ){
      this.notificationService.success("Vous venez d'activé le mode tactile de votre écran", "Information système")
    }
    else if( this.i==3 ){
      this.notificationService.error("Ca suffit arrete de me frapper, tu n'as rien de mieux à faire ?", "Maltraitance système")
    }
    else{
      this.notificationService.success("Vous êtes bien perseverant malheureusement il n'y a rien ici ^^", "Perte de temps")
      this.i = 0
    }
  }
}
