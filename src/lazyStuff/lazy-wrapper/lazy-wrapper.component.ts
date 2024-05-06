import { CommonModule } from '@angular/common';
import {
  Component,
  Injector,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-lazy-wrapper',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-template #outletRef></ng-template>`,
})
export class LazyWrapperComponent implements OnInit {
  // the place where the lazy component should be rendered
  @ViewChild('outletRef', { read: ViewContainerRef })
  public outletRef!: ViewContainerRef;

  // provide an input to allow the component to be selected
  @Input()
  public componentName = '';

  constructor(private injector: Injector) {}

  // define a lazy import map that points to a function that will lazily import a given component
  private lazyComponentMap: Record<string, (() => Promise<any>) | undefined> = {
    test: () =>
      import('../lazy-component/lazy-component.component').then(
        (module) => module.LazyComponentComponent
      ),
  };

  ngOnInit(): void {
    // on init the input of the component name should be picked here
    const lazyComp = this.lazyComponentMap[this.componentName];
    if (lazyComp) {
      // if a valid object exists, execute the import, and render the component in the outlet ref
      lazyComp().then((component) => {
        this.outletRef.createComponent(component, {
          // also use the injector so that the context is accurate
          injector: this.injector,
        });
      });
    }
  }
}
