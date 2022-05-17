import CustomButton from '../components/CustomButton/CustomButton.vue';

export default {
  title: 'Components/CustomButton',
  component: CustomButton,
  argTypes: {
    title: { control: 'text' },
    selected: { control: 'boolean' },
    index: { control: 'number' },
    onClick: {},
  },
};

const Template = (args) => ({
  components: { CustomButton },

  setup() {
    return { args };
  },

  template: '<CustomButton v-bind="args" />',
});

export const CustomButtonComponent = Template.bind({});

CustomButtonComponent.args = {
  selected: false,
  title: 'Botão',
  index: 1
};