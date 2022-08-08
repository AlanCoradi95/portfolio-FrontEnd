import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { SocialComponent } from './components/social/social.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { StudyComponent } from './components/study/study.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { ProyectsComponent } from './components/proyects/proyects.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    SocialComponent,
    BannerComponent,
    AboutComponent,
    StudyComponent,
    LoginComponent,
    HomeComponent,
    SkillsComponent,
    ProyectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProgressbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
