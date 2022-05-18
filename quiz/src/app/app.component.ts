import { Component } from '@angular/core';
import { TabListType } from './components/Tab/tab.component';

@Component({
  selector: 'app-root',
  template: `
    <app-tab [data]="tabList"></app-tab>
    `,
})

export class AppComponent {
  title = 'quiz';

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
}
