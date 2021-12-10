import { Story, Meta } from '@storybook/react';
import { LatestVideo, LatestVideoProps } from './latest-video';

export default {
  component: LatestVideo,
  title: 'Latest Video',
} as Meta;

const Template: Story<LatestVideoProps> = (args) => <LatestVideo {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
