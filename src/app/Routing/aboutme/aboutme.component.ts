import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

  }

  animationEnded(event) {
    const id: string = 'cdk-step-label-' + event.selectedStep._stepper._groupId + '-' + event.selectedIndex;
    const element = document.getElementById(id);
    setTimeout(() => {
      element.scrollIntoView();
    }, 200);
  }
}
