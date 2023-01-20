import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './components/home.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LanguageComponent } from './components/language/language.component';
import { HeaderComponent } from './components/struc/header/header.component';
import { FooterComponent } from './components/struc/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptor } from './interceptor/token.interceptor';
import { ExperienceComponent } from './components/experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LanguageComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ExperienceComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports:[],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: CorsInterceptor,
    //   multi: true
    // },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
