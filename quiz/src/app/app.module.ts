import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomButtomComponent } from './components/CustomButton/custom-button.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomButtomComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }