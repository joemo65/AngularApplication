import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { WarningAlertComponent } from './WarningAlert/warningalert.component';
import { SuccessAlertComponent } from './SuccessAlert/successalert.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
