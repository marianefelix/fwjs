import { Meta, Story } from '@storybook/react';

import { Tab } from '../components/Tab';

const data = [
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

export default {
  title: 'Quiz/Components/Tab',
  component: Tab,
  argTypes: {
    data: {
      name: 'data',
      required: true,
    },
  },
} as Meta;

const Template: Story = (args) => <Tab data={data} {...args} />;

export const TabComponent = Template.bind({});

TabComponent.args = {
  data,
};

TabComponent.parameters = {
  docs: {
    source: {
      code: `
        <Tab data={
          [
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
          ]
        } 
      />`,
    },
  },
};

