import { Component, OnInit } from '@angular/core';
import { fadeInOut, shiftIn } from '../../animations/animations';
import { Router } from '@angular/router';
import { ScrolledView, ViewServiceService } from '../../service/view-service.service';
import { FooterComponent } from 'src/app/footer/footer.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fadeInOut, shiftIn],
  standalone: true,
  imports: [FooterComponent, MatCardModule]
})

export class HomeComponent implements OnInit {

  public isFaded = false;
  public isShifted1 = true;
  public isShifted2 = true;
  public isShifted3 = true;
  public isShifted4 = true;

  constructor(private router: Router, private scrollViewService: ViewServiceService) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.isFaded = true;
    }, 10);
  }

  shift1(shifted: boolean) {
    this.isShifted1 = shifted;
    //  console.log(this.isShifted1, 'shift');
  }

  shift2(shifted: boolean) {
    this.isShifted2 = shifted;
    //  console.log(this.isShifted2, 'shift');
  }

  shift3(shifted: boolean) {
    this.isShifted3 = shifted;
    // console.log(this.isShifted3, 'shift');
  }

  shift4(shifted: boolean) {
    this.isShifted4 = shifted;
    // console.log(this.isShifted4, 'shift');
  }

  public navToRoute(route: string, scroll: number) {
    // console.log('navigate to route: ', route);
    this.router.navigateByUrl(route);
    switch (scroll) {
      case 0:
        this.scrollViewService.scrolledView$.next(ScrolledView.SOFTWARE_DEV);
        break;
      case 1:
        this.scrollViewService.scrolledView$.next(ScrolledView.SKILLSHEET);
        break;
      case 2:
        this.scrollViewService.scrolledView$.next(ScrolledView.INTERACTIVECV);
        break;
      case 3:
        this.scrollViewService.scrolledView$.next(ScrolledView.MYPERSON);
        break;
    }
  }
}
