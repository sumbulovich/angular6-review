import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appDirective]'
})
export class DirectiveDirective implements OnInit {
  @Input('appDirective') color: string;

  constructor() { }

  @HostBinding('style.backgroundColor') backgroundColor: string;

  ngOnInit() {
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.highlight(this.color);
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.backgroundColor = color;
  }

}
