import { Component } from '@angular/core';

@Component({
  selector: 'module-federation-mfe1-entry',
  template: `<button routerLink="mfe2">mfe2</button>
  <router-outlet></router-outlet>`,
  styles: [
    `
      .remote-entry {
        background-color: #143055;
        color: white;
        padding: 5px;
      }
    `,
  ],
})
export class RemoteEntryComponent {}
