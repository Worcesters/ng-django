import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  pdfSrc = '/assets/curriculum/CV_2023-04-19_Jérémy_DIDIER.pdf';
  constructor() { }
}
