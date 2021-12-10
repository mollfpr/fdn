import { Story, Meta } from '@storybook/react';
import { TopBrands, TopBrandsProps } from './top-brands';

export default {
  component: TopBrands,
  title: 'Top Brands',
} as Meta;

const Template: Story<TopBrandsProps> = (args) => <TopBrands {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
