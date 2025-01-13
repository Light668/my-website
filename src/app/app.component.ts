import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ViewServiceService } from './service/view-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterOutlet, RouterLink, RouterLinkActive, MatSidenavModule,
    MatToolbarModule, MatIconModule, RouterOutlet, FormsModule],  
})

export class AppComponent {
  title = 'my-app';
  opened = false;
  console = console;

  constructor(private router: Router) {
  }

  public navToRoute(s: string) {
    console.log('navigate to route: ', s);
    this.router.navigateByUrl(s);
    this.opened = false;
  }

  public toggleSideBar() {
    this.opened = !this.opened;
    console.log(this.opened);
  }
}

