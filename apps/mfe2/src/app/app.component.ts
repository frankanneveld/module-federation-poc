import { shareNgZone } from '@angular-architects/module-federation-tools';
import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'module-federation-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mfe2';
  constructor(private ngZone: NgZone) {
    console.log(this.title);
    shareNgZone(ngZone);
  }
}
