import { Story, Meta } from '@storybook/react';
import { NavBar, NavBarProps } from './nav-bar';

export default {
  component: NavBar,
  title: 'Navigation Bar',
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} as Meta;

const Template: Story<NavBarProps> = (args) => <NavBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
