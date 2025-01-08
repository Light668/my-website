import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {InterestsComponent} from './Routing/interests/interests.component';
import {SkillsetComponent} from './Routing/skillset/skillset.component';
import {AboutmeComponent} from './Routing/aboutme/aboutme.component';
import {AboutsiteComponent} from './Routing/aboutsite/aboutsite.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTreeModule} from '@angular/material/tree';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './Routing/home/home.component';

@NgModule({
  declarations: [
    AboutmeComponent,
    AppComponent,
    InterestsComponent,
    SkillsetComponent,
    AboutsiteComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    MatTreeModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatCardModule,
    MatStepperModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
