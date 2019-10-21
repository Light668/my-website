import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterestsComponent } from './Routing/interests/interests.component';
import { SkillsetComponent } from './Routing/skillset/skillset.component';
import { AboutmeComponent } from './Routing/aboutme/aboutme.component';
import { AboutsiteComponent } from './Routing/aboutsite/aboutsite.component';


const routes: Routes = [
  {
    path: 'interests',
    component: InterestsComponent
  },
  {
    path: 'skillset',
    component: SkillsetComponent
  },
  {
    path: 'aboutme',
    component: AboutmeComponent
  },
  {
    path: 'aboutsite',
    component: AboutsiteComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
