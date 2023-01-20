import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <p>
      404 Error! Page not found
      <a routerLink="/">Retourner à l'accueil</a>
    </p>
  `,
  styles: [
  ]
})
export class PageNotFoundComponent {

}
