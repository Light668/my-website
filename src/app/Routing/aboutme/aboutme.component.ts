import {Component, OnInit} from '@angular/core';
import {ScrolledView, ViewServiceService} from '../../service/view-service.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  constructor(private scrollViewService: ViewServiceService) {
  }

  ngOnInit() {
    this.scrollViewService.scrolledView$.subscribe((sV: ScrolledView) => {
      if (sV !== undefined &&
        sV === ScrolledView.INTERACTIVECV) {
        const id = 'interactive-cv';
        setTimeout(() => {
          const element = document.getElementById(id);
          element.scrollIntoView();
        }, 200);
      }
    });
  }

  animationEnded(event) {
    const id: string = 'cdk-step-label-' + event.selectedStep._stepper._groupId + '-' + event.selectedIndex;
    const element = document.getElementById(id);
    setTimeout(() => {
      element.scrollIntoView();
    }, 200);
  }
}
