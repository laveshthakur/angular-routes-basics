

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import { HeaderComponent } from './app-main/header/header.component';
import { FooterComponent } from './app-main/footer/footer.component';
import { NavComponent } from './app-main/nav/nav.component';
import { AdsComponent } from './app-main/ads/ads.component';
import { MainComponent } from './app-main/container/container.component';
import { AComponent } from './app-main/container/a/a.component';
import { BComponent } from './app-main/container/b/b.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './app-login/login/login.component';
import { RegisterComponent } from './app-login/register/register.component';
import { ForgotComponent } from './app-login/forgot/forgot.component';

@NgModule({
  imports: [BrowserModule,
     AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    AdsComponent,
    MainComponent,
    AComponent,
    BComponent,
    LoginComponent,
    RegisterComponent,
    ForgotComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
