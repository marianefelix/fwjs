import { Component } from "@angular/core";

interface TabListType {
    title: string;
    description: string;
}

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'] 
})

export class TabComponent {
    tabList: TabListType[]  = [
        {
            "title": "Tab 1",
            "description": "Texto 1",
        },
        {
            "title": "Tab 2",
            "description": "Texto 2",
        },
        {
            "title": "Tab 3",
            "description": "Texto 3",
        },
        {
            "title": "Tab 4",
            "description": "Texto 4",
        },
    ];
    
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