import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  opened = false;

  constructor(private router: Router) {
  }

  public navToRoute(s: string) {
    // console.log('navigate to route: ', s);
    this.router.navigateByUrl(s);
    this.opened = false;
  }
}

