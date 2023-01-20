import { Component } from '@angular/core';

@Component({
  selector: 'app-crashtest',
  templateUrl: './crashtest.component.html',
  styleUrls: [ './crashtest.component.css' ]
})
export class CrashtestComponent {
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
