import { Component } from "@angular/core";

@Component({
  selector: 'app-description-container',
  template: `
    <div class="description-container">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./description-container.component.css'] 
})

export class DescriptionContainerComponent {}