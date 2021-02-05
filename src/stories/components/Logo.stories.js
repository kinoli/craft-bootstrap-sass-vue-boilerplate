import Logo from '@/components/Logo'

export default {
  title: 'Components/Logo',
  component: Logo,
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Logo },
  template: '<logo v-bind="$props" />',
})

export const Default = Template.bind({})
