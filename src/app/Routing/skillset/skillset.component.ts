import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import {ScrolledView, ViewServiceService} from '../../service/view-service.service';


@Component({
  selector: 'app-skillset',
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.css']
})
export class SkillsetComponent implements OnInit {

  value = 0;
  intervalId;

  constructor(public media: MediaObserver, private scrollViewService: ViewServiceService) {

  }

  ngOnInit() {
    this.scrollViewService.scrolledView$.subscribe((sV: ScrolledView) => {
    if (sV !== undefined &&
      sV === ScrolledView.SKILLSHEET) {
      const id = 'skillsheet';
      setTimeout(() => {
        const element = document.getElementById(id);
        element.scrollIntoView();
      }, 200);
    }
  });
  }

  valueCalc(value: number) {

    let result: number;
    result = (value * 100 / 9) - 10 * (10 / 9);
    return result;
  }

}
