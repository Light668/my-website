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

export const shiftIn =
  trigger('shiftIn', [
    // ...
    state('shift_out', style({
      transform: 'translateX({{ signShift }}%)',
      opacity: 0,
    }), {params: {signShift:100}}),
    state('shift_in', style({
      opacity: 1,
    })),
    transition('shift_out <=> shift_in', [
      animate('350ms ease-in-out')
    ])
  ]);
