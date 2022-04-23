import { Component, EventEmitter, Input, Output } from "@angular/core";

export interface CustomButtom {
    title: string;
    selected: boolean;
    index: number;
}

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css'] 
})

export class CustomButtomComponent {
   @Input() title!: string;
   @Input() selected!: boolean;
   @Input() index!: number;

   @Output() onClick = new EventEmitter<number>();
}