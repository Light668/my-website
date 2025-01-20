import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ScrolledView, ViewServiceService } from '../../service/view-service.service';
import { MatCardModule } from '@angular/material/card';
import { FooterComponent } from 'src/app/footer/footer.component';


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
  standalone: true,
  imports: [MatCardModule, FooterComponent]
})
export class InterestsComponent implements OnInit {

  constructor(private scrollViewService: ViewServiceService) {
  }

  ngOnInit() {
    this.scrollViewService.scrolledView$.subscribe((sV: ScrolledView) => {
      if (sV !== undefined &&
        sV === ScrolledView.SOFTWARE_DEV) {
        const id = 'software-dev';
        setTimeout(() => {
          const element = document.getElementById(id);
          element.scrollIntoView();
        }, 200);
      }
      if (sV !== undefined && sV === ScrolledView.MYPERSON) {
        const id = 'personal';
        setTimeout(() => {
          const element = document.getElementById(id);
          element.scrollIntoView();
        }, 200);
      }
    });
  }
}
