import { Component, OnInit } from '@angular/core';
import { ScrolledView, ViewServiceService } from '../../service/view-service.service';
import { FooterComponent } from 'src/app/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css'],
  standalone: true,
  imports: [FooterComponent, MatIconModule, MatStepperModule]
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
