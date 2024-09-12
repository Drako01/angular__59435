import { Component } from '@angular/core';

@Component({
  selector: 'app-main-wapper',
  template: `
    <main>
      <ng-content select="app-header-app" />
      <ng-content select="h1" />
      <ng-content/>
    </main>
  `,
  styles: ``
})
export class MainWapperComponent {

}
