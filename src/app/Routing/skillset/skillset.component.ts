import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';


@Component({
  selector: 'app-skillset',
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.css']
})
export class SkillsetComponent implements OnInit {

  value = 0;
  intervalId;

  constructor(public media: MediaObserver) {

  }

  ngOnInit() {
  }

}
