import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomButtomComponent } from './components/CustomButton/custom-button.component';
import { EnunciationComponent } from './components/Enunciation/enunciation.component';
import { TabComponent } from './components/Tab/tab.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomButtomComponent,
    EnunciationComponent,
    TabComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }