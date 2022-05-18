import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-enunciation',
  template: `
  <div class="description-container">
    <h2 class="enunciation-text">
      <ng-content></ng-content>
    </h2>
  </div>
  `,
  styleUrls: ['./enunciation.component.css'] 
})

export class EnunciationComponent {}