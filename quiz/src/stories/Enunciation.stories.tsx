import { Meta, Story } from '@storybook/react';

import { Enunciation } from '../components/Enunciation';

export default {
  title: 'Quiz/Components/Enunciation',
  component: Enunciation,
  argTypes: {
    text: { 
      name: 'text', 
      required: true, 
    },
  },
} as Meta;

const Template: Story = (args) => <Enunciation text="Enunciado da questão" {...args} />;

export const EnunciationComponent = Template.bind({});

EnunciationComponent.args = {
  text: 'Enunciado da questão',
};

EnunciationComponent.parameters = {
  docs: {
    source: {
      code: '<Enunciation text="Enunciado da questão" />',
    },
  },
};

