import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  animationEnded(event) {

    let id: string = 'cdk-step-label-0-' + event.selectedIndex;
    let element = document.getElementById(id);
    setTimeout(() => { element.scrollIntoView(); }, 200);
  }
}
