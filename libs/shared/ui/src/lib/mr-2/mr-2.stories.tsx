import { Story, Meta } from '@storybook/react';
import { Mr2, Mr2Props } from './mr-2';

export default {
  component: Mr2,
  title: 'Banner/Mr2',
} as Meta;

const Template: Story<Mr2Props> = (args) => <Mr2 {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
