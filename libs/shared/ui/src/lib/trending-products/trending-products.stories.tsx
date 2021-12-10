import { Story, Meta } from '@storybook/react';
import { TrendingProducts, TrendingProductsProps } from './trending-products';

export default {
  component: TrendingProducts,
  title: 'Trending Products',
} as Meta;

const Template: Story<TrendingProductsProps> = (args) => (
  <TrendingProducts {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
