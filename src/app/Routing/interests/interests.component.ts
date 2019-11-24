import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-interests',
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        padding: '15px'
      })),
      state('closed', style({
        height: '0px',
        opacity: 0,
        padding: '0px'
      })),
      transition('open => closed', [
        animate('0.25s')
      ]),
      transition('closed => open', [
        animate('0.25s')
      ])
    ])
  ],
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css'],
})
export class InterestsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
