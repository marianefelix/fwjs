<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import CustomButton from "../components/CustomButton/CustomButton.svelte";
</script>

<Meta
  title="Components/CustomButton"
  component={CustomButton}
  argTypes={{
    selected: { control: "boolean" },
    title: { control: "text"},
    index: { control: "number" },
    onClick: {},
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
    onClick: {} 
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