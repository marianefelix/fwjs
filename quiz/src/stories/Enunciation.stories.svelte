<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import Enunciation from "../components/Enunciation/Enunciation.svelte";
  </script>
  
  <Meta
    title="Components/Enunciation"
    component={Enunciation}
    argTypes={{
      text: { control: "text"},
    }}
  />
  
  <Template let:args>
    <Enunciation {...args} />
  </Template>
  
  <Story
    name="Enunciation Component"
    args={{
      text: "Enunciado"
    }}
    source='<Enunciation text="Enunciado" />'
  />
  
  