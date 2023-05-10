import { Component, Input, HostListener } from '@angular/core';
import { NotificationService } from 'app/services/notification.service';
import { WindowScrollService } from 'app/services/window-scroll.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  i: number = 0
  message: string = ""

  @Input() imageSrc: string = '';
  imageOpacity: number = 0;
  imageOffset: number = 100;
  transitioned: boolean = false;

  constructor(private notificationService: NotificationService) { }

  @HostListener('window:scroll', ['$event']) onWindowScroll(event: any) {
    const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    const image = document.querySelector('.sliding-image') as HTMLElement;

    if (!this.transitioned && windowBottom >= image.offsetTop + image.clientHeight / 2) {
      const pixelsFromBottom = docHeight - windowBottom;
      const imagePixelsFromBottom = image.offsetTop - pixelsFromBottom;
      this.imageOpacity = 1;
      this.imageOffset = Math.max(0, imagePixelsFromBottom) * -0.2;
    }
  }

  onTransitionEnd() {
    this.transitioned = true;
  }

  fakeButton () {
    this.i += 1

    if (this.i == 1) {
      this.notificationService.error("Vous n'avez pas appuyer assez fort veuillez réessayer", "Erreur lors de l'utilisation")
    }
    else if (this.i == 2) {
      this.notificationService.success("Vous venez d'activé le mode tactile de votre écran", "Information système")
    }
    else if (this.i == 3) {
      this.notificationService.error("Ca suffit arrete de me frapper, tu n'as rien de mieux à faire ?", "Maltraitance système")
    }
    else {
      this.notificationService.success("Vous êtes bien perseverant malheureusement il n'y a rien ici ^^", "Perte de temps")
      this.i = 0
    }
  }
}
