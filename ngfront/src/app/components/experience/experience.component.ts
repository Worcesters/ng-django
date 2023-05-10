import { Component } from '@angular/core';
import { baseUrl } from 'app/models/experience.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  pdfSrc = baseUrl + 'curriculum/CV_2023_04_19.pdf';
  constructor() { }
}
