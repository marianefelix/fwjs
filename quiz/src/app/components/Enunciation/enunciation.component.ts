import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-enunciation',
  template: `
    <h2 class="enunciation-text">
      <ng-content></ng-content>
    </h2>
  `,
  styleUrls: ['./enunciation.component.css'] 
})

export class EnunciationComponent {}