import { Component, OnInit } from '@angular/core';
import { ScrolledView, ViewServiceService } from '../../service/view-service.service';
import { MatCardModule } from '@angular/material/card';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { FooterComponent } from 'src/app/footer/footer.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-skillset',
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.css'],
  standalone: true,
  imports: [MatCardModule, CdkAccordionModule, MatProgressBarModule,
    MatExpansionModule, FooterComponent, CommonModule]
})
export class SkillsetComponent implements OnInit {

  value = 0;
  intervalId;
  public isMobileView: boolean;
  public isWebView: boolean;

  constructor(private scrollViewService: ViewServiceService, public responsive: BreakpointObserver) {

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

    this.responsive.observe(Breakpoints.Handset)
      .subscribe((result: BreakpointState) => {

        if (result.matches) {
          // console.log("screens matches Handset");
          this.isMobileView = true;
        } else {
          // console.log("screen does not match Handset");
          this.isWebView = true;
        }

      });
  }

  ngOnDestroy(): void {
    this.responsive.ngOnDestroy(); 
  }

  valueCalc(value: number) {

    let result: number;
    result = (value * 100 / 9) - 10 * (10 / 9);
    return result;
  }

}
