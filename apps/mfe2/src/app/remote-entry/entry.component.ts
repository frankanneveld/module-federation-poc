import { WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { Component } from '@angular/core';

@Component({
  selector: 'module-federation-mfe2-entry',
  template: `<div class="remote-entry">
    <h2>mfe2's Remote Entry Component</h2>
    <div>with remote webcomponents</div>
    <div *ngFor="let item of items" class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
        <div class="box">
            <mft-wc-wrapper [options]="item"></mft-wc-wrapper>
        </div>
    </div>
  </div>`,
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
export class RemoteEntryComponent {
  items: WebComponentWrapperOptions[] = [
    {
        remoteEntry: 'https://witty-wave-0a695f710.azurestaticapps.net/remoteEntry.js',
        remoteName: 'react',
        exposedModule: './web-components',
        elementName: 'react-element'
    },   
    
    {
        remoteEntry: 'https://nice-grass-018f7d910.azurestaticapps.net/remoteEntry.js',
        remoteName: 'angular1',
        exposedModule: './web-components',
        elementName: 'angular1-element'
    },    

    {
        remoteEntry: 'https://gray-pond-030798810.azurestaticapps.net//remoteEntry.js',
        remoteName: 'angular2',
        exposedModule: './web-components',
        elementName: 'angular2-element'
    },   
    
    {
        remoteEntry: 'https://mango-field-0d0778c10.azurestaticapps.net/remoteEntry.js',
        remoteName: 'vue',
        exposedModule: './web-components',
        elementName: 'vue-element'
    },  
    
    {
        remoteEntry: 'https://calm-mud-0a3ee4a10.azurestaticapps.net//remoteEntry.js',
        remoteName: 'angularjs',
        exposedModule: './web-components',
        elementName: 'angularjs-element'
    },
  ];
}
