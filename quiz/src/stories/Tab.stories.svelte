<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import Tab from "../components/Tab/Tab.svelte";

    const data =  [
      {
        "title": "Tab 1",
        "description": "Texto 1",
      },
      {
        "title": "Tab 2",
        "description": "Texto 2",
      },
      {
        "title": "Tab 3",
        "description": "Texto 3",
      },
      {
        "title": "Tab 4",
        "description": "Texto 4",
      },
    ];
</script>
  
  <Meta
    title="Components/Tab"
    component={Tab}
  />
  
  <Template let:args>
    <Tab {...args} />
  </Template>
  
  <Story
    name="Tab Component"
    args={{data}}
    source='<Tab data={data} />'
  />
  
  