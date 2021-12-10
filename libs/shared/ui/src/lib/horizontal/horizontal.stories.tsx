import { Story, Meta } from '@storybook/react';
import { Horizontal, HorizontalProps } from './horizontal';

export default {
  component: Horizontal,
  title: 'Banner/Horizontal',
} as Meta;

const Template: Story<HorizontalProps> = (args) => <Horizontal {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
