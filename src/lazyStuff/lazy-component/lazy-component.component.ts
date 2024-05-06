import { Component } from '@angular/core';

@Component({
  selector: 'app-lazy-component',
  standalone: true,
  imports: [],
  template: `<h1 style="color:purple;"> I am a lazy component </h1>`,
})
export class LazyComponentComponent {
}
