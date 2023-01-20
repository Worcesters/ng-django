import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-language',
  templateUrl:'./language.component.html', 
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

}
