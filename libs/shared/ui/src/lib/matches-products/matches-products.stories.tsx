import { Story, Meta } from '@storybook/react';
import { MatchesProducts, MatchesProductsProps } from './matches-products';

export default {
  component: MatchesProducts,
  title: 'Matches Products',
} as Meta;

const Template: Story<MatchesProductsProps> = (args) => (
  <MatchesProducts {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
