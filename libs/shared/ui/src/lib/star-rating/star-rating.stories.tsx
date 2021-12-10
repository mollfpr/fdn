import { Story, Meta } from '@storybook/react';
import { StarRating, StarRatingProps } from './star-rating';

export default {
  component: StarRating,
  title: 'Star Rating',
} as Meta;

const Template: Story<StarRatingProps> = (args) => <StarRating {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  star: 4.1,
};
