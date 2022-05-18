import { Meta, Story } from '@storybook/angular';

import { EnunciationComponent as Enunciation } from 'src/app/components/Enunciation/enunciation.component';

export default {
    title: 'Quiz/Components/Enunciation',
    component: Enunciation,
  } as Meta;
  
export const EnunciationComponent: Story = () => ({
    template: `
    <app-enunciation>
        Enunciado
    </app-enunciation>`
});
  
  
EnunciationComponent.parameters = {
    docs: {
        source: {
            code: `
<app-enunciation>
    Enunciado
</app-enunciation>
            `
        },
    },
};