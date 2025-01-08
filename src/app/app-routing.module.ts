import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterestsComponent } from './Routing/interests/interests.component';
import { SkillsetComponent } from './Routing/skillset/skillset.component';
import { AboutmeComponent } from './Routing/aboutme/aboutme.component';
import { AboutsiteComponent } from './Routing/aboutsite/aboutsite.component';
import {HomeComponent} from './Routing/home/home.component';


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
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
