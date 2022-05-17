import Enunciation from '../components/Enunciation/Enunciation.vue';

export default {
  title: 'Components/Enunciation',
  component: Enunciation,
  argTypes: {
    text: { control: 'text' }
  },
};

const Template = (args) => ({
  components: { Enunciation },

  setup() {
    return { args };
  },

  template: '<Enunciation v-bind="args" />',
});

export const EnunciationComponent = Template.bind({});

EnunciationComponent.args = {
  text: 'Enunciado',
};