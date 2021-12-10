import { Story, Meta } from '@storybook/react';
import { TopFrame, TopFrameProps } from './top-frame';

export default {
  component: TopFrame,
  title: 'Banner/Top Frame',
} as Meta;

const Template: Story<TopFrameProps> = (args) => <TopFrame {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
