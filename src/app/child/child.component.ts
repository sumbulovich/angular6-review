import { Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() inputVar;
  @Output() outputVar = new EventEmitter<string>();
  @ContentChild( 'localRef' ) localRef: ElementRef;
  contentChild: string;

  constructor() {
  }

  ngOnInit() {
    this.contentChild = this.localRef.nativeElement.innerText;
  }

  function1(outputValue: string) {
    this.outputVar.emit( outputValue );
  }

}
