import { Story, Meta } from '@storybook/react';
import { BottomFrame, BottomFrameProps } from './bottom-frame';

export default {
  component: BottomFrame,
  title: 'Banner/Bottom Frame',
} as Meta;

const Template: Story<BottomFrameProps> = (args) => <BottomFrame {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
