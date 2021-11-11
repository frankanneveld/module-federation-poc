import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [
    BrowserModule,
    RouterModule.forChild([
      {
        path: '',
        component: RemoteEntryComponent,
        children: [
          {
            path: 'mfe2',
            loadChildren: () =>
            import('mfe2/Module').then((m) => m.RemoteEntryModule),
          },
        ]
      },

    ]),
  ],
  providers: [],
})
export class RemoteEntryModule {}
