import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomButtomComponent } from './components/CustomButton/custom-button.component';
import { DescriptionContainerComponent } from './components/DescriptionContainer/description-container.component';
import { EnunciationComponent } from './components/Enunciation/enunciation.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomButtomComponent,
    EnunciationComponent,
    DescriptionContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }