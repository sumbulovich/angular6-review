import { Component } from '@angular/core';
import { state, trigger, style, transition, animate, group, keyframes } from '@angular/animations';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss'],
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        'transform': 'translateX(0)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        'transform': 'translateX(100px)'
      })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(800))
    ]),
    trigger('wildState', [
      state('normal', style({
        'background-color': 'red',
        'transform': 'translateX(0) scale(1)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        'transform': 'translateX(100px) scale(1)'
      })),
      state('shrunken', style({
        'background-color': 'green',
        'transform': 'translateX(0) scale(0.5)'
      })),
      transition('normal <=> highlighted', animate(300)),
      transition('shrunken <=> *', [
        // Define multiple steps on a transition
        style({ // With style without animate, the style is instantly applied
          'background-color': 'orange',
          'border-radius': '0px'
        }),
        animate(2000, style({ // With animate and style, the style is applied over some time
          'border-radius': '50%'
        })),
        animate(500) // With animate without style, transition to the end state
      ])
    ]),
    trigger('list1', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        animate(1000, keyframes([
          style({
            opacity: 0,
            transform: 'translateX(-100px)',
            offset: 0 // By default all the keyframes have the same timing offset
          }),
          style({
            opacity: 0.5,
            transform: 'translateX(-50px)',
            offset: 0.3
          }),
          style({
            opacity: 1,
            transform: 'translateX(-20px)',
            offset: 0.8
          }),
          style({
            opacity: 1,
            transform: 'translateX(0px)',
            offset: 1
          }),
        ]))
      ]),
      transition('* => void', [
        style({
          'text-decoration': 'line-through'
        }),
        group([ // Animations that are performed synchronously
          animate(800, style({
            opacity: 0,
            transform: 'translateX(100px)'
          })),
          animate(300, style({
            color: 'red'
          }))
        ])
      ]),
    ]),
    trigger('blockInitialRenderAnimation', [
      transition('void => *', [])
    ])
  ]
})
export class AnimationsComponent {
  list = ['Milk', 'Sugar', 'Bread'];
  state = 'normal';
  wildState = 'normal';

  onAnimate() {
    this.state === 'normal' ? this.state = 'highlighted' : this.state = 'normal';
    this.wildState === 'normal' ? this.wildState = 'highlighted' : this.wildState = 'normal';
  }

  onShrink() {
    this.wildState = 'shrunken';
  }

  onAdd(item) {
    this.list.push(item);
  }

  onDelete(item) {
    this.list.splice(this.list.indexOf(item), 1);
  }

  animationStarted($event) {
    console.log($event);
  }

  animationEnded($event) {
    console.log($event);
  }
}
