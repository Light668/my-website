import {animate, state, style, transition, trigger} from '@angular/animations';

export const fadeInOut =
trigger('fadeIn', [
  // ...
  state('out', style({
    opacity: 0,
    marginTop: 0,
    transform: 'translateY(-100%)',
  })),
  state('in', style({
    opacity: 1,
  })),
  transition('out => in', [
    animate('250ms ease-in-out')
  ])
]);
