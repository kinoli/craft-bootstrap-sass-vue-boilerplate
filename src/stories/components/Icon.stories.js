import Icon from '@/components/Icon'

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    // name: { control: { type: 'select', options: iconList } },
    color: { control: 'color', default: 'var(--primary)' },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Icon },
  template: '<Icon v-bind="$props" />',
})

export const Default = Template.bind({})
Default.args = {
  name: 'close',
  size: '50px',
}
