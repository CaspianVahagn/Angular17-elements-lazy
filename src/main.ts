import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { LazyWrapperComponent } from './lazyStuff/lazy-wrapper/lazy-wrapper.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LazyWrapperComponent],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
    <app-lazy-wrapper componentName="test"></app-lazy-wrapper> 
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
