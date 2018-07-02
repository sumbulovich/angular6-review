import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: [ './templates.component.scss' ]
} )
export class TemplatesComponent implements OnInit {
  booleanVar = false;
  contextExp = {
    $implicit: 'contextExp value 1', // By default
    contextVal2: 'contextExp value 2',
    contextVal3: 'contextExp value 3'
  };

  contextExp2 = {
    $implicit: 'contextExp2 value 1', // By default
    contextVal2: 'contextExp2 value 2',
  };

  constructor() {
  }

  ngOnInit() {
  }

}
