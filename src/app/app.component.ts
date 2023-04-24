import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`.fifth{}`]
})
export class AppComponent {
  showParagrah = false;
  clickList = [];
  numberClicked = 0;
 
  OnButtonClick(){
    this.numberClicked += 1;
    this.clickList.push(this.numberClicked);
  }

}
