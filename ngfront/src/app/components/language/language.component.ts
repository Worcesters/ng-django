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

  val: string = ""

  changeSide(hoverVal: string = ""){
    if(hoverVal == 'html' || hoverVal == 'css'){
      this.val = 'show-front'
    }
    else if(hoverVal == 'php'){
      this.val = 'show-left'
    }
    else if(hoverVal == 'js'){
      this.val = 'show-right'
    }
    else if(hoverVal == 'angular' || hoverVal == 'angularJs'){
      this.val = 'show-bottom'
    }
    else if(hoverVal == 'python'){
      this.val = 'show-back'
    }
    else if(hoverVal == 'django'){
      this.val = 'show-top'
    }
    return this.val
  }

}
