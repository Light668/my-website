import {Component, OnInit} from '@angular/core';
import {fadeInOut} from '../../animations/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fadeInOut],
})
export class HomeComponent implements OnInit {

  public isFaded = false;

  constructor() {
  }

  ngOnInit() {
    setTimeout(() => {
      this.isFaded = true;
    }, 10);
  }
}
