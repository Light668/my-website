import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material';
import { InterestsComponent } from './Routing/interests/interests.component';
import { SkillsetComponent } from './Routing/skillset/skillset.component';
import { AboutmeComponent } from './Routing/aboutme/aboutme.component';
import { AboutsiteComponent } from './Routing/aboutsite/aboutsite.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AboutmeComponent,
    AppComponent,
    InterestsComponent,
    SkillsetComponent,
    AboutsiteComponent
  ],
  imports: [
    MatCardModule,
    MatStepperModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    FlexLayoutModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
