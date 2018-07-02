import { Component, Injector } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { ChildElementComponent } from './child-element/child-element.component';
import { interval, Subscription } from 'rxjs/index';
import { map } from 'rxjs/internal/operators';

@Component( {
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: [ './elements.component.scss' ]
} )
export class ElementsComponent {
  content = null;
  subscription: Subscription;
  interval: number;

  constructor( injector: Injector, domSanitizer: DomSanitizer ) {
    const childElement = createCustomElement( ChildElementComponent, {injector} );
    customElements.define( 'my-alert', childElement );

    /*setTimeout(() => {
      this.content = domSanitizer.bypassSecurityTrustHtml('<my-alert message="Rendered dynamicaly"></my-alert>');
    }, 5000);*/

    // With Observables (interval)
    const timer = interval( 1000 ).pipe(
      map(
        ( second: number ) => {
          return second;
        } )
    );

    this.subscription = timer.subscribe(
      ( second: number ) => {
        this.interval = 5 - second;

        if ( this.interval < 1 ) {
          this.content = domSanitizer.bypassSecurityTrustHtml( '<my-alert message="Rendered dynamicaly"></my-alert>' );
          this.subscription.unsubscribe();
        }
      }
    );
  }
}
