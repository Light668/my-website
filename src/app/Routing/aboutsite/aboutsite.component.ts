import { Component, OnInit } from '@angular/core';
import { FooterComponent } from 'src/app/footer/footer.component';

@Component({
  selector: 'app-aboutsite',
  templateUrl: './aboutsite.component.html',
  styleUrls: ['./aboutsite.component.css'],
  standalone: true,
  imports: [FooterComponent]
})

export class AboutsiteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
