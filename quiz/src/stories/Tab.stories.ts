import { Meta, Story } from '@storybook/angular';

import { TabComponent as Tab } from 'src/app/components/Tab/tab.component';

export default {
    title: 'Quiz/Components/Tab',
    component: Tab,
    argTypes: {
        data: {
            name: 'data',
            required: true,
          },
    }
} as Meta;
  
export const TabComponent: Story = (args) => ({
    props: args,
});
  
TabComponent.args = {
    data: [
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
    ],
};

TabComponent.parameters = {
    docs: {
        source: {
            code: `
<app-tab [data]="tabList">
</app-tab>`
        },
    },
};