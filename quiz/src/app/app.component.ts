import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-custom-button 
      title="Tab 1"
      [selected]="true"
      [index]="1"
    >
    </app-custom-button>
    <app-description-container>
      <app-enunciation>Texto 1</app-enunciation>
    </app-description-container>
    `,
  styles: [`
    h1 {
      text-align: center;
    }
  `]
})
export class AppComponent {
  title = 'quiz';
}
