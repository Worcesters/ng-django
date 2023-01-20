import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LanguageComponent } from './language/language.component';
import { ExperienceComponent } from './experience/experience.component';
import { LoginComponent } from './login/login.component';
import { CrashtestComponent } from './crashtest/crashtest.component';

const home: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'languages', component: LanguageComponent },
  { path: 'experiences', component: ExperienceComponent },
  { path: 'login', component: LoginComponent },
  { path: 'crash', component: CrashtestComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(home)
  ]
})
export class HomeModule { }
