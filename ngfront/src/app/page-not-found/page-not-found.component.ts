import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <main>
        <section>
            <article>
                <h1> 404 Not Found </h1>
                <div>
                    <h2> Etes vous perdus ? </h2>
                    <p>
                        N'hésitez pas a consulté nos postes d'assistance ou utilisé les sorties de secours disponible en haut de page, afin d'éviter toute souffrance inutile 
                    </p>
                    <div> VOIR INFOS </div>
                </div>

                <div>
                    <h3> Cette page s'autodetruira dans 30 secondes merci de revenir en sécurité </h3>
                    <p>
                        Attention vous ne devriez pas être ici cela est du a une mauvaise URL, votre mission si vous l'acceptez revenir en sécurité sur une url valide.
                    </p>
                    <div> VOIR INFOS </div>
                </div>
            </article>
            <div class="img"></div>
        </section>
    </main>
  `,
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent {

}
