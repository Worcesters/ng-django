import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CurriculumComponent } from './vitae/curriculum.component';
import { LanguageComponent } from './language/language.component';
import { LoginComponent } from './login/login.component';

const curriculum: Routes = [
  { path: 'curriculum', component: CurriculumComponent },
  { path: 'language', component: LanguageComponent },
  { path: 'login', component: LoginComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(curriculum)
  ]
})
export class CurriculumModule { }
