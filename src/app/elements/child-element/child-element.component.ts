import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-element',
  templateUrl: './child-element.component.html',
  styleUrls: ['./child-element.component.scss']
})
export class ChildElementComponent {
  @Input() message: string;
}
