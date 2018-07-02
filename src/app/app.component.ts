import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  inputVar = 'input-var';
  outputVar: string;
  @ViewChild( ChildComponent ) childComponent: ChildComponent;

  ngOnInit() {
    this.childComponent.function1('output-var');
  }

  fn1(eventData: string) {
    this.outputVar = eventData;
  }
}
