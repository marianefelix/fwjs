import { Component, Input } from "@angular/core";

export interface TabListType {
    title: string;
    description: string;
}

export interface TabProps {
    data: TabListType[];
}

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'] 
})

export class TabComponent {
  @Input() data!: TabListType[];
    
    currentlySelectedTab = 0;
    

    tabOnClick = (tabIndex: number) => {
        this.currentlySelectedTab = tabIndex;
    };

    isTabSelected = (tabIndex: number) => {
        if (tabIndex === this.currentlySelectedTab) {
            return true;
        }

        return false;
    };
}