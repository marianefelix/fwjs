<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import CustomButton from "../components/CustomButton/CustomButton.svelte";
  import { action } from '@storybook/addon-actions';
</script>

<Meta
  title="Components/CustomButton"
  component={CustomButton}
  argTypes={{
    selected: { control: "boolean" },
    title: { control: "text"},
    index: { control: "number" },
    onClick: { action: action('clicked') },
  }}
/>

<Template let:args>
  <CustomButton {...args} />
</Template>

<Story
  name="Custom Button Component"
  args={{ 
    selected: false, 
    title: "Boão", 
    index: 1, 
  }}
  source='
  <CustomButton 
    title="Botão"
    selected={false} 
    index={1} 
    on:selection={() => {}}
  />
  '
/>