import { Meta, Story } from '@storybook/react';

import { DescriptionContainer } from '../components/DescriptionContainer';
import { Enunciation } from '../components/Enunciation';

export default {
  title: 'Quiz/Components/DescriptionContainer',
  component: DescriptionContainer,
  argTypes: {
    children: { 
      name: 'children', 
      required: true, 
    },
  },
} as Meta;

const Template: Story = (args) => (
    <DescriptionContainer>
        <Enunciation text="Enunciado da questão" />
    </DescriptionContainer>
);

export const DescriptionContainerComponent = Template.bind({});

DescriptionContainerComponent.args = {
  children: <Enunciation text="Enunciado da questão" />,
};

DescriptionContainerComponent.parameters = {
  docs: {
    source: {
      code: `
        <DescriptionContainer>
            <Enunciation text="Enunciado da questão" />
        </DescriptionContainer>
      `,
    },
  },
};

