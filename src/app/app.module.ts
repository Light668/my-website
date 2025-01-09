import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { InterestsComponent } from './Routing/interests/interests.component';
import { SkillsetComponent } from './Routing/skillset/skillset.component';
import { AboutmeComponent } from './Routing/aboutme/aboutme.component';
import { AboutsiteComponent } from './Routing/aboutsite/aboutsite.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTreeModule } from '@angular/material/tree';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './Routing/home/home.component';

@NgModule({
  declarations: [
    AboutmeComponent,
    AppComponent,
    AboutsiteComponent
  ],
  imports: [
    MatTreeModule,
    MatExpansionModule,
    MatStepperModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SkillsetComponent,
    InterestsComponent,
    FooterComponent,
    HomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
