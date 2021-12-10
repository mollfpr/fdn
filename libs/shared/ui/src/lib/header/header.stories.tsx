import { Story, Meta } from '@storybook/react';
import { Header, HeaderProps } from './header';

export default {
  component: Header,
  title: 'Header',
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
