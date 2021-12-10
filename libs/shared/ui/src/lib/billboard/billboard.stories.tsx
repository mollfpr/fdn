import { Story, Meta } from '@storybook/react';
import { Billboard, BillboardProps } from './billboard';

export default {
  component: Billboard,
  title: 'Banner/Billboard',
} as Meta;

const Template: Story<BillboardProps> = (args) => <Billboard {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
