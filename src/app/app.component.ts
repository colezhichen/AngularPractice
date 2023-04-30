import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showParagrah = false;
  log = [];
  numberClicked = 0;
 
  onToggleDetails() {
    this.showParagrah = !this.showParagrah;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}
