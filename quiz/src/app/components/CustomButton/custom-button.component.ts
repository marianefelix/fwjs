import { Component, EventEmitter, Input, Output } from "@angular/core";

export interface CustomButton {
  title: string;
  selected: boolean;
  index: number;
}

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css'] 
})

export class CustomButtonComponent {
  @Input() title!: string;
  @Input() selected!: boolean;
  @Input() index!: number;

  @Output() onClick = new EventEmitter<number>();
}