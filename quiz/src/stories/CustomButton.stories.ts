import { Meta, Story } from '@storybook/angular';

import { CustomButtonComponent as CustomButton } from 'src/app/components/CustomButton/custom-button.component';

export default {
  title: 'Quiz/Components/CustomButton',
  component: CustomButton,
  argTypes: {
    title: { control: 'text' },
    selected: { control: 'boolean' },
    index: { control: 'number' },
    onClick: { },
  },
} as Meta;

export const ButtonComponent: Story = (args) => ({
    props: args,
});

ButtonComponent.args = {
    title: 'Botão',
    selected: false,
    index: 1,
};

ButtonComponent.parameters = {
    docs: {
        source: {
          code: `
<app-custom-button
    [title]="Botão"
    [selected]="false"
    [index]="1"
    (onClick)="onClick"
></app-custom-button>`,
        },
    },
};