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
  isOpen = true;
  public isCollapsed1: boolean;
  public isCollapsed2: boolean;
  public isCollapsed3: boolean;
  public isCollapsed4: boolean;
  constructor() {
    this.isCollapsed1 = false;
    this.isCollapsed2 = false;
    this.isCollapsed3 = false;
    this.isCollapsed4 = false;
  }

  ngOnInit() {
  }

  toggle(index: number) {
    switch (index) {
      case 1:
        this.isCollapsed1 = !this.isCollapsed1;
        break;
      case 2:
        this.isCollapsed2 = !this.isCollapsed2;
        break;
      case 3:
        this.isCollapsed3 = !this.isCollapsed3;
        break;
      case 4:
        this.isCollapsed4 = !this.isCollapsed4;
        break;
    }
  }
}
