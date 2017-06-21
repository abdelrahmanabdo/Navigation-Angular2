import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './Welcome';
import { AppComponent } from './app.component';
import { LoginComponent } from './Login';

@NgModule({
  declarations: [
    WelcomeComponent,
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot ([{path : 'welcome' , component : WelcomeComponent },
    { path: 'login', component: LoginComponent }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
