import { Meta, Story } from '@storybook/react';

import { CustomButton } from '../components/CustomButton';

export default {
  title: 'Quiz/Components/CustomButton',
  component: CustomButton,
  argTypes: {
    selected: { 
      name: 'selected', 
      required: false, 
    },
    title: {
      name: 'title',
      required: true,
    },
    onClick: { action: 'clicked' }
  },
} as Meta;

const Template: Story = (args) => <CustomButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  selected: false,
  title: 'Botão',
};

Primary.parameters = {
  docs: {
    source: {
      code: '<CustomButton title="Botão" />',
    },
  },
};

