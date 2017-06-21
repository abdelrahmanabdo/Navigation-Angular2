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
    RouterModule.forRoot([
{ path: '', component: LoginComponent },
{ path: 'welcome', component: WelcomeComponent }
])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
