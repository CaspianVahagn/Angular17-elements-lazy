
import {createCustomElement} from "@angular/elements";
import { LazyWrapperComponent } from "../lazyStuff/lazy-wrapper/lazy-wrapper.component";
import { createApplication } from "@angular/platform-browser";

(async () => {
  const app = await createApplication({providers: [
    ]});

  const el = createCustomElement(LazyWrapperComponent, {
    injector: app.injector,
  })
  customElements.define("angular-lazy-wrapper", el);
})()