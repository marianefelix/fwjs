import { Meta, Story } from '@storybook/react';

import { Tab } from '../components/Tab';

export default {
  title: 'Quiz/Components/Tab',
  component: Tab,
} as Meta;

const Template: Story = () => <Tab />;

export const TabComponent = Template.bind({});

TabComponent.parameters = {
  docs: {
    source: {
      code: '<Tab />',
    },
  },
};

