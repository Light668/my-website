import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  private selectedStep: number = 0;

  constructor() { }

  ngOnInit() {

  }

  animationEnded(event) {

    let id: string = "cdk-step-label-0-" + event.selectedIndex;
    console.log(event);
    console.log(id);
    let element = document.getElementById(id);
    console.log(element);
    setTimeout(() => { element.scrollIntoView(); }, 200);
    let ypos = element.clientHeight;
    console.log(ypos);
  }
}