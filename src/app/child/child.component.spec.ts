import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChildComponent } from './child.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component( {
  selector: 'app-dummy',
  template: `
    <app-child [inputVar]="inputVar" (outputVar)="fn1($event)">
      <div #localRef>ng-content</div>
    </app-child>`,
} )
class DummyComponent {
  inputVar: String;
  outputVar: String;

  fn1( eventData: string ) {
    this.outputVar = eventData;
  }
}

describe( 'App: CompleteGuideFinalWebpack', () => {
  let dummyFixture: ComponentFixture<DummyComponent>;
  let dummyComponent: DummyComponent;
  let component: ChildComponent;

  beforeEach( () => {
    TestBed.configureTestingModule( { // Configure the module for our testing
      declarations: [ // Declaration of which components we want to have in this testing environment
        DummyComponent,
        ChildComponent
      ]
    } ).compileComponents();
  } );

  beforeEach( () => {
    dummyFixture = TestBed.createComponent( DummyComponent ); // Create a component
    dummyComponent = dummyFixture.debugElement.componentInstance; // Create a component
    component = dummyFixture.debugElement.query( By.css( 'app-child' ) ).componentInstance; // Get the instance of the component created
    dummyFixture.detectChanges();
  } );

  it( 'should create the app', () => {
    expect( component ).toBeTruthy(); // Get and compare the expected result
  } );

  it( 'should get localRef from ng-content', () => {
    expect( component.contentChild ).toEqual( component.localRef.nativeElement.innerText ); // Get and compare the expected result
  } );

  it( 'should set inputVar', () => {
    dummyComponent.inputVar = 'testing';
    dummyFixture.detectChanges();
    expect( component.inputVar ).toEqual( dummyComponent.inputVar ); // Get and compare the expected result
  } );

  it( 'should set outputVar', () => {
    const outputValue = 'testing';
    component.function1( outputValue );
    expect( dummyComponent.outputVar ).toEqual( outputValue ); // Get and compare the expected result
  } );
} );
