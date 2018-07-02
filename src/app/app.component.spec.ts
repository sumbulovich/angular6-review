import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { MockComponent } from '../test';

// Declaration of Mock components we want to have in this testing environment
/*@Component({
  selector: 'app-child',
  template: '',
})
class ChildStubComponent {
  @Input() inputVar: string;
  @Output() outputVar = new EventEmitter<string>();
}*/

describe('App: CompleteGuideFinalWebpack', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({ // Configure the module for our testing
      declarations: [ // Declaration of which components we want to have in this testing environment
        AppComponent,
        // ChildStubComponent,
        MockComponent( {
          selector: 'app-child',
          inputs: [ 'inputVar' ],
          outputs: [ 'outputVar' ]
        }),
        MockComponent( {
          selector: 'app-templates'
        }),
        MockComponent( {
          selector: 'app-directives'
        }),
        MockComponent( {
          selector: 'app-services'
        }),
        MockComponent( {
          selector: 'app-routing'
        }),
        MockComponent( {
          selector: 'app-observables'
        }),
        MockComponent( {
          selector: 'app-forms'
        }),
        MockComponent( {
          selector: 'app-pipes'
        }),
        MockComponent( {
          selector: 'app-http'
        }),
        MockComponent( {
            selector: 'app-animations'
        }),
        MockComponent( {
          selector: 'app-elements'
        }),
      ],
      providers: [] // Services
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent); // Create a component
    component = fixture.debugElement.componentInstance; // Get the instance of the component created
    component.childComponent = new ChildComponent();
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy(); // Get and compare the expected result
  });

  it('should set outputVar', () => {
    component.fn1('testing');
    expect(component.outputVar).toEqual('testing'); // Get and compare the expected result
  });
});
