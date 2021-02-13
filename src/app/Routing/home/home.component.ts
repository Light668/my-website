import {Component, OnInit} from '@angular/core';
import {fadeInOut, shiftIn} from '../../animations/animations';
import {Router} from '@angular/router';
import {ScrolledView, ViewServiceService} from '../../service/view-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fadeInOut, shiftIn],
})
export class HomeComponent implements OnInit {

  public isFaded = false;
  public isShifted = true;

  constructor(private router: Router, private scrollViewService: ViewServiceService) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.isFaded = true;
    }, 10);
  }

  shift(shifted: boolean) {
    this.isShifted = shifted;
    console.log(this.isShifted, 'shift');
  }

  public navToRoute(s: string) {
    console.log('navigate to route: ', s);
    this.router.navigateByUrl(s);
    this.scrollViewService.scrolledView$.next(ScrolledView.SOFTWARE_DEV);
  }
}
